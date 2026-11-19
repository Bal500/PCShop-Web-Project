import React, { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Plus, ExternalLink, FileText, CheckCircle, Banknote } from "lucide-react";
import { db, storage, callHardveraproTop3, callVintedTop3 } from "../firebase";

const CATEGORIES = ["Processzor", "Videókártya", "Alaplap", "Memória", "Háttértár", "Tápegység", "Ház", "Hűtő"];

export default function InventoryTab({ parts, userEmail }) {
  const [showSold, setShowSold] = useState(false);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Videókártya");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [shipping, setShipping] = useState(false);
  const [ownCard, setOwnCard] = useState(false);
  const [hasInvoice, setHasInvoice] = useState(true);
  const [invoiceFile, setInvoiceFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const canSave =
    name.trim() &&
    Number(purchasePrice) > 0 &&
    (shipping || serialNumber.trim()) &&
    (!hasInvoice || shipping || invoiceFile);

  async function fetchTop3Both(q) {
    const [ha, vi] = await Promise.allSettled([callHardveraproTop3({ query: q }), callVintedTop3({ query: q })]);
    const list = [
      ...(ha.status === "fulfilled" ? ha.value.data?.top3 || [] : []),
      ...(vi.status === "fulfilled" ? vi.value.data?.top3 || [] : [])
    ];
    return list.sort((a, b) => a.price - b.price).slice(0, 3);
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!canSave) return;
    setSaving(true);
    try {
      let invoiceFileUrl = null;
      if (invoiceFile) {
        const sRef = ref(storage, `invoices/${Date.now()}_${invoiceFile.name}`);
        await uploadBytes(sRef, invoiceFile);
        invoiceFileUrl = await getDownloadURL(sRef);
      }
      const topMarketOffers = await fetchTop3Both(name.trim()).catch(() => []);

      await addDoc(collection(db, "parts"), {
        name: name.trim(),
        category,
        serialNumber: serialNumber.trim() || (shipping ? "Úton" : "Nincs"),
        purchasePrice: Number(purchasePrice),
        status: shipping ? "Szállítás alatt" : "Készleten",
        paidWithOwnCard: ownCard,
        paidByEmail: ownCard ? userEmail : null,
        hasInvoice,
        invoiceFileUrl,
        topMarketOffers,
        createdAt: Date.now()
      });

      setName(""); setSerialNumber(""); setPurchasePrice("");
      setShipping(false); setOwnCard(false); setInvoiceFile(null); setShowForm(false);
    } finally {
      setSaving(false);
    }
  }

  async function handleArrive(part) {
    const sn = prompt("Add meg a megérkezett termék SN számát:", part.serialNumber === "Úton" ? "" : part.serialNumber);
    if (sn === null) return;
    await updateDoc(doc(db, "parts", part.id), {
      status: "Készleten",
      serialNumber: sn.trim() || "Nincs megadva"
    });
  }

  async function handleSell(part) {
    const defaultPrice = part.topMarketOffers?.[0]?.price || part.purchasePrice;
    const raw = prompt(`${part.name} eladási ára (Ft):`, String(defaultPrice));
    if (!raw || Number(raw) <= 0) return;
    await updateDoc(doc(db, "parts", part.id), {
      status: "Eladva",
      soldPrice: Number(raw),
      soldAt: Date.now()
    });
  }

  const filtered = parts
    .filter((p) => (showSold ? p.status === "Eladva" : p.status !== "Eladva"))
    .filter((p) =>
      !search.trim() ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.serialNumber || "").toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Készlet & Rendelés</h2>
        <button className="btn" onClick={() => setShowForm((v) => !v)}>
          <Plus size={16} /> {showForm ? "Bezárás" : "Új tétel / Rendelés"}
        </button>
      </div>

      {showForm && (
        <form className="card" onSubmit={handleAdd}>
          <div className="grid-2">
            <input placeholder="Típus (pl. RTX 3070)" value={name} onChange={(e) => setName(e.target.value)} required />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <input placeholder={shipping ? "SN szám (átvételkor is megadható)" : "Sorozatszám (SN)"} value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
            <input type="number" placeholder="Beszerzési ár (Ft)" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} required />
          </div>

          <div className="row" style={{ marginTop: 12 }}>
            <label><input type="checkbox" style={{ width: "auto" }} checked={shipping} onChange={(e) => setShipping(e.target.checked)} /> Szállítás alatt</label>
            <label><input type="checkbox" style={{ width: "auto" }} checked={ownCard} onChange={(e) => setOwnCard(e.target.checked)} /> Saját kártyával fizetve</label>
            <label><input type="checkbox" style={{ width: "auto" }} checked={hasInvoice} onChange={(e) => setHasInvoice(e.target.checked)} /> Számlás</label>
          </div>

          {hasInvoice && (
            <div style={{ marginTop: 10 }}>
              <div className="muted" style={{ marginBottom: 4 }}>
                {shipping ? "Számla (átvételkor is csatolható)" : "Számla feltöltése kötelező (PDF/kép)"}
              </div>
              <input type="file" accept="application/pdf,image/*" onChange={(e) => setInvoiceFile(e.target.files?.[0] || null)} />
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={!canSave || saving}>
              {saving ? "Mentés..." : "Mentés"}
            </button>
          </div>
        </form>
      )}

      <div className="row" style={{ marginBottom: 12 }}>
        <div className="row">
          <button className={`btn ${!showSold ? "" : "btn-ghost"}`} onClick={() => setShowSold(false)}>Aktív & Úton</button>
          <button className={`btn ${showSold ? "" : "btn-ghost"}`} onClick={() => setShowSold(true)}>Eladott</button>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <input placeholder="Keresés név vagy SN alapján..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="grid-2">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <div className="row">
              <strong>{p.name}</strong>
              <div className="row">
                {p.paidWithOwnCard && <span className="badge badge-purple">Saját kártyás</span>}
                <span className={`badge ${p.status === "Szállítás alatt" ? "badge-orange" : p.status === "Eladva" ? "badge-green" : "badge-blue"}`}>
                  {p.status}
                </span>
              </div>
            </div>
            <div className="muted" style={{ marginTop: 4 }}>
              SN: {p.serialNumber} • Vétel: {p.purchasePrice?.toLocaleString("hu-HU")} Ft
              {p.status === "Eladva" && p.soldPrice ? ` → Eladva: ${p.soldPrice.toLocaleString("hu-HU")} Ft` : ""}
            </div>

            {p.status === "Szállítás alatt" && (
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-orange" onClick={() => handleArrive(p)}><CheckCircle size={15} /> Megérkezett</button>
              </div>
            )}
            {p.status === "Készleten" && (
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-green" onClick={() => handleSell(p)}><Banknote size={15} /> Eladás rögzítése</button>
              </div>
            )}

            {p.status !== "Eladva" && p.topMarketOffers?.length > 0 && (
              <div className="offer-box">
                <div className="muted">Top 3 legolcsóbb (5+ értékelés):</div>
                {p.topMarketOffers.map((o, i) => (
                  <div className="row" key={o.url + i} style={{ marginTop: 4 }}>
                    <span className={i === 0 ? "green" : ""}>#{i + 1} {o.price?.toLocaleString("hu-HU")} Ft (+{o.sellerPositiveRating})</span>
                    <a href={o.url} target="_blank" rel="noreferrer" style={{ color: "#60a5fa" }}><ExternalLink size={13} /></a>
                  </div>
                ))}
              </div>
            )}

            {p.invoiceFileUrl && (
              <div style={{ marginTop: 8 }}>
                <a href={p.invoiceFileUrl} target="_blank" rel="noreferrer" style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}>
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
