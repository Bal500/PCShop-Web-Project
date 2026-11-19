import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Plus, ExternalLink, FileText, CheckCircle, Banknote, Pencil, Trash2, X, Image as ImageIcon } from "lucide-react";
import { db, storage, callHardveraproTop3, callVintedTop3 } from "../firebase";

const CATEGORIES = ["Processzor", "Videókártya", "Alaplap", "Memória", "Háttértár", "Tápegység", "Ház", "Hűtő"];

export default function InventoryTab({ parts, userEmail }) {
  const [showSold, setShowSold] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Összes");
  const [search, setSearch] = useState("");

  // Űrlap állapot (új felvétel, szerkesztés, vagy "Megérkezett" átvétel)
  const [showForm, setShowForm] = useState(false);
  const [editingPart, setEditingPart] = useState(null);
  const [arrivingMode, setArrivingMode] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Memória");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [shipping, setShipping] = useState(false);
  const [ownCard, setOwnCard] = useState(false);

  // Számla (alapból nincs bepipálva)
  const [hasInvoice, setHasInvoice] = useState(false);
  const [existingInvoiceUrl, setExistingInvoiceUrl] = useState(null);
  const [invoiceFile, setInvoiceFile] = useState(null);

  // Opcionális termékkép
  const [existingImageUrl, setExistingImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  function resetForm() {
    setEditingPart(null);
    setArrivingMode(false);
    setName("");
    setCategory(selectedCategory !== "Összes" ? selectedCategory : "Videókártya");
    setSerialNumber("");
    setPurchasePrice("");
    setShipping(false);
    setOwnCard(false);
    setHasInvoice(false);
    setExistingInvoiceUrl(null);
    setInvoiceFile(null);
    setExistingImageUrl(null);
    setImageFile(null);
    setFormError("");
  }

  function openNewForm() {
    resetForm();
    setShowForm(true);
  }

  function openEditForm(part, fromArrive = false) {
    setEditingPart(part);
    setArrivingMode(fromArrive);
    setName(part.name || "");
    setCategory(CATEGORIES.includes(part.category) ? part.category : "Memória");
    const isOnWay = part.serialNumber === "Úton";
    setSerialNumber(fromArrive && isOnWay ? "" : (part.serialNumber || ""));
    setPurchasePrice(part.purchasePrice !== undefined && part.purchasePrice !== null ? String(part.purchasePrice) : "");
    setShipping(fromArrive ? false : part.status === "Szállítás alatt");
    setOwnCard(!!part.paidWithOwnCard);
    setHasInvoice(!!part.hasInvoice);
    setExistingInvoiceUrl(part.invoiceFileUrl || null);
    setInvoiceFile(null);
    setExistingImageUrl(part.imageUrl || null);
    setImageFile(null);
    setFormError("");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const numericPrice = Number(purchasePrice);
  const hasValidPrice = purchasePrice.trim() !== "" && !Number.isNaN(numericPrice) && numericPrice >= 0;
  const hasAnyInvoice = Boolean(invoiceFile || existingInvoiceUrl);

  const missingReasons = [];
  if (!name.trim()) missingReasons.push("Add meg a típus nevét");
  if (!hasValidPrice) missingReasons.push("Adj meg beszerzési árat (0 Ft is lehet)");
  if (!shipping && !serialNumber.trim()) {
    missingReasons.push("Add meg a sorozatszámot (SN), vagy pipáld be a 'Szállítás alatt' opciót");
  }
  if (hasInvoice && !shipping && !hasAnyInvoice) {
    missingReasons.push("Csatolj számlafájlt, vagy vedd ki a 'Számlás' pipát");
  }

  const canSave = missingReasons.length === 0;

  async function fetchTop3Both(q) {
    const [ha, vi] = await Promise.allSettled([callHardveraproTop3({ query: q }), callVintedTop3({ query: q })]);
    const list = [
      ...(ha.status === "fulfilled" ? ha.value.data?.top3 || [] : []),
      ...(vi.status === "fulfilled" ? vi.value.data?.top3 || [] : [])
    ];
    return list.sort((a, b) => a.price - b.price).slice(0, 3);
  }

  async function handleSave(e) {
    e.preventDefault();
    setFormError("");
    if (!canSave) {
      setFormError(missingReasons.join(" • "));
      return;
    }

    setSaving(true);
    try {
      let invoiceFileUrl = existingInvoiceUrl;
      if (hasInvoice && invoiceFile) {
        const sRef = ref(storage, `invoices/${Date.now()}_${invoiceFile.name}`);
        await uploadBytes(sRef, invoiceFile);
        invoiceFileUrl = await getDownloadURL(sRef);
      } else if (!hasInvoice) {
        invoiceFileUrl = null;
      }

      let imageUrl = existingImageUrl;
      if (imageFile) {
        const imgRef = ref(storage, `parts/${Date.now()}_${imageFile.name}`);
        await uploadBytes(imgRef, imageFile);
        imageUrl = await getDownloadURL(imgRef);
      }

      const nextStatus = shipping
        ? "Szállítás alatt"
        : editingPart
          ? (editingPart.status === "Szállítás alatt" ? "Készleten" : editingPart.status || "Készleten")
          : "Készleten";

      const payload = {
        name: name.trim(),
        category,
        serialNumber: serialNumber.trim() || (shipping ? "Úton" : "Nincs"),
        purchasePrice: numericPrice,
        status: nextStatus,
        paidWithOwnCard: ownCard,
        paidByEmail: ownCard ? (editingPart?.paidByEmail || userEmail) : null,
        hasInvoice,
        invoiceFileUrl,
        imageUrl: imageUrl || null
      };

      if (editingPart) {
        await updateDoc(doc(db, "parts", editingPart.id), payload);
      } else {
        let topMarketOffers = [];
        try {
          topMarketOffers = await fetchTop3Both(name.trim());
        } catch (_) {
          topMarketOffers = [];
        }
        await addDoc(collection(db, "parts"), {
          ...payload,
          topMarketOffers,
          createdAt: Date.now()
        });
      }

      resetForm();
      setShowForm(false);
    } catch (err) {
      console.error("Mentési hiba:", err);
      setFormError(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(part) {
    if (!confirm(`Biztosan törlöd: ${part.name}?`)) return;
    await deleteDoc(doc(db, "parts", part.id));
    if (editingPart?.id === part.id) {
      resetForm();
      setShowForm(false);
    }
  }

  async function handleSell(part) {
    const defaultPrice = part.topMarketOffers?.[0]?.price ?? part.purchasePrice ?? 0;
    const raw = prompt(`${part.name} eladási ára (Ft):`, String(defaultPrice));
    if (raw === null || raw.trim() === "") return;
    const numericSold = Number(raw);
    if (Number.isNaN(numericSold) || numericSold < 0) return;
    await updateDoc(doc(db, "parts", part.id), {
      status: "Eladva",
      soldPrice: numericSold,
      soldAt: Date.now()
    });
  }

  const baseList = parts.filter((p) => (showSold ? p.status === "Eladva" : p.status !== "Eladva"));

  const filtered = baseList
    .filter((p) => selectedCategory === "Összes" || p.category === selectedCategory)
    .filter((p) =>
      !search.trim() ||
      (p.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (p.serialNumber || "").toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Készlet & Rendelés</h2>
        <button className="btn" onClick={() => (showForm ? (resetForm(), setShowForm(false)) : openNewForm())}>
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? "Bezárás" : "Új tétel / Rendelés"}
        </button>
      </div>

      {showForm && (
        <form className="card" onSubmit={handleSave}>
          <div className="row" style={{ marginBottom: 10 }}>
            <h3 style={{ margin: 0 }}>
              {arrivingMode
                ? `Megérkezett: ${name || editingPart?.name}`
                : editingPart
                  ? `Szerkesztés: ${editingPart.name}`
                  : "Új tétel / Rendelés felvétele"}
            </h3>
            {arrivingMode && <span className="badge badge-orange">Átvétel • Készletre vétel</span>}
          </div>

          <div className="grid-2">
            <input
              placeholder="Típus (pl. RTX 3070)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              placeholder={shipping ? "SN szám (átvételkor is megadható)" : "Sorozatszám (SN)"}
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <input
              type="number"
              min="0"
              placeholder="Beszerzési ár (Ft) — 0 is lehet"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              required
            />
          </div>

          <div className="row" style={{ marginTop: 12 }}>
            <label>
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={shipping}
                onChange={(e) => setShipping(e.target.checked)}
              />{" "}
              Szállítás alatt
            </label>
            <label>
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={ownCard}
                onChange={(e) => setOwnCard(e.target.checked)}
              />{" "}
              Saját kártyával fizetve
            </label>
            <label>
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={hasInvoice}
                onChange={(e) => setHasInvoice(e.target.checked)}
              />{" "}
              Számlás
            </label>
          </div>

          {/* Opcionális termékkép */}
          <div style={{ marginTop: 12 }}>
            <div className="muted" style={{ marginBottom: 4 }}>
              <ImageIcon size={13} style={{ verticalAlign: "middle", marginRight: 4 }} />
              Termékkép csatolása (opcionális)
            </div>
            {existingImageUrl && !imageFile && (
              <div style={{ marginBottom: 6 }}>
                <img
                  src={existingImageUrl}
                  alt={name || "Termékkép"}
                  style={{ maxHeight: 110, borderRadius: 8, objectFit: "cover", border: "1px solid var(--border)" }}
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </div>

          {/* Számla (csak ha be van pipálva a Számlás) */}
          {hasInvoice && (
            <div style={{ marginTop: 12 }}>
              <div className="muted" style={{ marginBottom: 4 }}>
                {existingInvoiceUrl && !invoiceFile
                  ? "Jelenleg csatolt számla megmarad (új fájl kiválasztásával cserélhető):"
                  : shipping
                    ? "Számla (átvételkor is csatolható)"
                    : "Számla feltöltése (PDF/kép) — vagy vedd ki a 'Számlás' pipát"}
              </div>
              {existingInvoiceUrl && (
                <div style={{ marginBottom: 6 }}>
                  <a
                    href={existingInvoiceUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}
                  >
                    <FileText size={14} /> Meglévő számla megtekintése
                  </a>
                </div>
              )}
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => setInvoiceFile(e.target.files?.[0] || null)}
              />
            </div>
          )}

          {!canSave && (
            <div className="muted" style={{ marginTop: 10 }}>
              Hiányzik: {missingReasons.join(" • ")}
            </div>
          )}

          {formError && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {formError}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={!canSave || saving}>
              {saving ? "Mentés..." : editingPart ? "Módosítások mentése" : "Mentés"}
            </button>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
            >
              Mégse
            </button>
          </div>
        </form>
      )}

      {/* Státusz váltó + Kereső */}
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="row">
          <button className={`btn ${!showSold ? "" : "btn-ghost"}`} onClick={() => setShowSold(false)}>
            Aktív & Úton
          </button>
          <button className={`btn ${showSold ? "" : "btn-ghost"}`} onClick={() => setShowSold(true)}>
            Eladott
          </button>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <input
            placeholder="Keresés név vagy SN alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Komponens kategória gombok */}
      <div className="row" style={{ marginBottom: 14 }}>
        <button
          className={`btn ${selectedCategory === "Összes" ? "" : "btn-ghost"}`}
          style={{ padding: "6px 11px", fontSize: 12 }}
          onClick={() => setSelectedCategory("Összes")}
        >
          Összes ({baseList.length})
        </button>
        {CATEGORIES.map((cat) => {
          const count = baseList.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              className={`btn ${selectedCategory === cat ? "" : "btn-ghost"}`}
              style={{ padding: "6px 11px", fontSize: 12 }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid-2">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <div className="row">
              <strong>{p.name}</strong>
              <div className="row">
                <span className="badge badge-indigo">{p.category || "Egyéb"}</span>
                {p.paidWithOwnCard && <span className="badge badge-purple">Saját kártyás</span>}
                <span
                  className={`badge ${
                    p.status === "Szállítás alatt"
                      ? "badge-orange"
                      : p.status === "Eladva"
                        ? "badge-green"
                        : "badge-blue"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            </div>

            {p.imageUrl && (
              <div style={{ marginTop: 8 }}>
                <a href={p.imageUrl} target="_blank" rel="noreferrer">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    style={{
                      width: "100%",
                      maxHeight: 170,
                      objectFit: "cover",
                      borderRadius: 8,
                      border: "1px solid var(--border)"
                    }}
                  />
                </a>
              </div>
            )}

            <div className="muted" style={{ marginTop: 6 }}>
              SN: {p.serialNumber} • Vétel: {(p.purchasePrice ?? 0).toLocaleString("hu-HU")} Ft
              {p.status === "Eladva" && p.soldPrice !== undefined && p.soldPrice !== null
                ? ` → Eladva: ${Number(p.soldPrice).toLocaleString("hu-HU")} Ft`
                : ""}
            </div>

            <div className="row" style={{ marginTop: 10 }}>
              <div className="row">
                {p.status === "Szállítás alatt" && (
                  <button className="btn btn-orange" onClick={() => openEditForm(p, true)}>
                    <CheckCircle size={15} /> Megérkezett
                  </button>
                )}
                {p.status === "Készleten" && (
                  <button className="btn btn-green" onClick={() => handleSell(p)}>
                    <Banknote size={15} /> Eladás rögzítése
                  </button>
                )}
              </div>

              <div className="row">
                <button className="btn btn-ghost" onClick={() => openEditForm(p, false)}>
                  <Pencil size={14} /> Szerkesztés
                </button>
                <button className="btn btn-red" onClick={() => handleDelete(p)} title="Törlés">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            {p.status !== "Eladva" && p.topMarketOffers?.length > 0 && (
              <div className="offer-box">
                <div className="muted">Top 3 legolcsóbb (5+ értékelés):</div>
                {p.topMarketOffers.map((o, i) => (
                  <div className="row" key={o.url + i} style={{ marginTop: 4 }}>
                    <span className={i === 0 ? "green" : ""}>
                      #{i + 1} {o.price?.toLocaleString("hu-HU")} Ft (+{o.sellerPositiveRating})
                    </span>
                    <a href={o.url} target="_blank" rel="noreferrer" style={{ color: "#60a5fa" }}>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {p.invoiceFileUrl && (
              <div style={{ marginTop: 8 }}>
                <a
                  href={p.invoiceFileUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}
                >
                  <FileText size={14} /> Számla megnyitása / letöltése
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
