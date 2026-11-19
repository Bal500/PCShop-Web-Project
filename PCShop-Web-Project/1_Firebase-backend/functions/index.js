const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");
const axios = require("axios");
const cheerio = require("cheerio");

if (!admin.apps.length) {
    admin.initializeApp();
}

const db = admin.firestore();

const ALLOWED_EMAILS = [
    "te.email.cimed@gmail.com",
    "baratod.email.cime@gmail.com"
];

const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

async function searchHardveraproInternal(query) {
    const encodedQuery = encodeURIComponent(query.trim());
    const searchUrl = `https://hardverapro.hu/aprok/kereses.php?stext=${encodedQuery}&minprice=1000`;

    const response = await axios.get(searchUrl, {
        headers: { "User-Agent": USER_AGENT },
        timeout: 10000
    });

    const $ = cheerio.load(response.data);
    const validListings = [];

    $("li.media").each((_, element) => {
        const titleElement = $(element).find(".uad-title h1 a");
        const title = titleElement.text().trim();
        const url = titleElement.attr("href");

        const priceText = $(element).find(".uad-price").text().trim();
        const isIced = priceText.toLowerCase().includes("jegelve") ||
                       $(element).find(".uad-info").text().toLowerCase().includes("jegelve");

        if (isIced || !title || !url) return;

        const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ""), 10);
        if (isNaN(numericPrice) || numericPrice <= 0) return;

        const ratingText = $(element).find(".uad-rating, .uad-user").text().trim();
        const positiveMatch = ratingText.match(/\+?\s*(\d+)/);
        const positiveRatings = positiveMatch ? parseInt(positiveMatch[1], 10) : 0;

        if (positiveRatings >= 5) {
            validListings.push({
                title: `[HA] ${title}`,
                price: numericPrice,
                sellerPositiveRating: positiveRatings,
                url: url.startsWith("http") ? url : `https://hardverapro.hu${url}`
            });
        }
    });

    validListings.sort((a, b) => a.price - b.price);
    return validListings.slice(0, 3);
}

async function searchVintedInternal(query) {
    const initResponse = await axios.get("https://www.vinted.hu", {
        headers: {
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7"
        },
        timeout: 10000
    });

    const rawCookies = initResponse.headers["set-cookie"];
    if (!rawCookies) {
        throw new Error("A Vinted nem adott vissza munkamenet sütit.");
    }
    const cookieHeader = rawCookies.map(c => c.split(";")[0]).join("; ");

    const encodedQuery = encodeURIComponent(query.trim());
    const apiUrl = `https://www.vinted.hu/api/v2/catalog/items?search_text=${encodedQuery}&order=price_low_to_high&price_from=1000&currency=HUF&per_page=40`;

    const apiResponse = await axios.get(apiUrl, {
        headers: {
            "User-Agent": USER_AGENT,
            "Cookie": cookieHeader,
            "Accept": "application/json, text/plain, */*"
        },
        timeout: 10000
    });

    const items = apiResponse.data.items || [];
    const validListings = [];

    for (const item of items) {
        const rawPrice = (typeof item.price === "object" && item.price !== null)
            ? item.price.amount
            : item.price;
        const numericPrice = Math.round(parseFloat(rawPrice));

        if (isNaN(numericPrice) || numericPrice < 1000) continue;

        const sellerRatings = item.user?.feedback_count ?? item.user?.positive_feedback_count ?? 5;

        if (sellerRatings >= 5) {
            validListings.push({
                title: `[Vinted] ${item.title}`,
                price: numericPrice,
                sellerPositiveRating: sellerRatings,
                url: item.url || `https://www.vinted.hu/items/${item.id}`
            });
        }
    }

    validListings.sort((a, b) => a.price - b.price);
    return validListings.slice(0, 3);
}

exports.getHardveraproPrice = onCall({ region: "europe-west1" }, async (request) => {
    if (!request.auth || !ALLOWED_EMAILS.includes(request.auth.token.email)) {
        throw new HttpsError("permission-denied", "Nincs jogosultságod.");
    }
    const query = request.data.query;
    if (!query || !query.trim()) {
        throw new HttpsError("invalid-argument", "Hiányzó keresési kifejezés.");
    }
    try {
        const top3 = await searchHardveraproInternal(query);
        return { found: top3.length > 0, top3 };
    } catch (e) {
        throw new HttpsError("internal", "HardverApró lekérdezési hiba.");
    }
});

exports.getVintedPrice = onCall({ region: "europe-west1" }, async (request) => {
    if (!request.auth || !ALLOWED_EMAILS.includes(request.auth.token.email)) {
        throw new HttpsError("permission-denied", "Nincs jogosultságod.");
    }
    const query = request.data.query;
    if (!query || !query.trim()) {
        throw new HttpsError("invalid-argument", "Hiányzó keresési kifejezés.");
    }
    try {
        const top3 = await searchVintedInternal(query);
        return { found: top3.length > 0, top3 };
    } catch (e) {
        throw new HttpsError("internal", "Vinted lekérdezési hiba.");
    }
});

exports.dealHunterCron = onSchedule(
    {
        schedule: "every 15 minutes",
        region: "europe-west1",
        timeZone: "Europe/Budapest"
    },
    async () => {
        const watchesSnap = await db.collection("deal_watches")
            .where("enabled", "==", true)
            .get();

        if (watchesSnap.empty) return;

        const tokensSnap = await db.collection("device_tokens").get();
        const uniqueTokens = [...new Set(
            tokensSnap.docs
                .map(d => d.data())
                .filter(d => ALLOWED_EMAILS.includes((d.email || "").toLowerCase()) && d.token)
                .map(d => d.token)
        )];

        for (const watchDoc of watchesSnap.docs) {
            const watch = watchDoc.data();
            const query = (watch.query || "").trim();
            const maxPrice = Number(watch.maxPrice || 0);
            const source = Number(watch.source ?? 2);

            if (!query || maxPrice <= 0) continue;

            const alreadyNotified = new Set(Array.isArray(watch.notifiedUrls) ? watch.notifiedUrls : []);
            if (watch.lastNotifiedUrl) alreadyNotified.add(watch.lastNotifiedUrl);

            let candidates = [];
            if (source === 0 || source === 2) {
                try { candidates = candidates.concat(await searchHardveraproInternal(query)); } catch (_) {}
            }
            if (source === 1 || source === 2) {
                try { candidates = candidates.concat(await searchVintedInternal(query)); } catch (_) {}
            }

            const newDealsBelowTarget = candidates
                .filter(item => item.price <= maxPrice && !alreadyNotified.has(item.url))
                .sort((a, b) => a.price - b.price);

            if (newDealsBelowTarget.length === 0) continue;

            for (const deal of newDealsBelowTarget) {
                if (uniqueTokens.length > 0) {
                    try {
                        await admin.messaging().sendEachForMulticast({
                            notification: {
                                title: `Deal Hunter: ${query} — ${deal.price.toLocaleString("hu-HU")} Ft`,
                                body: `${deal.title} (+${deal.sellerPositiveRating}) • Célár: ${maxPrice.toLocaleString("hu-HU")} Ft`
                            },
                            data: { url: deal.url, query, price: String(deal.price) },
                            tokens: uniqueTokens
                        });
                    } catch (_) {}
                }

                alreadyNotified.add(deal.url);
                const dealDocId = Buffer.from(deal.url).toString("base64url").slice(0, 120);
                await db.collection("found_deals").doc(dealDocId).set({
                    watchId: watchDoc.id,
                    query,
                    title: deal.title,
                    price: deal.price,
                    maxPrice,
                    sellerPositiveRating: deal.sellerPositiveRating,
                    url: deal.url,
                    foundAt: admin.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            }

            await watchDoc.ref.update({
                notifiedUrls: Array.from(alreadyNotified).slice(-100),
                lastNotifiedUrl: newDealsBelowTarget[0].url,
                lastNotifiedPrice: newDealsBelowTarget[0].price,
                lastCheckedAt: admin.firestore.FieldValue.serverTimestamp()
            });
        }
    }
);
