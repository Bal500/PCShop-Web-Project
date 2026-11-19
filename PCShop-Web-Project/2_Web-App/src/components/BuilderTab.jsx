import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc, writeBatch } from "firebase/firestore";
import { ExternalLink, Search, Trash2 } from "lucide-react";
import { db, callHardveraproTop3, callVintedTop3 } from "../firebase";

export default function BuilderTab({ parts, builds }) {
  const [mode, setMode] = useState("builds");
  const [source, setSource] = useState(2); // 0: HA, 1: Vinted, 2: Mindkettő

  // Piaci kereső
  const [qText, setQText] = useState("");
  const [offers, setOffers] = useState([]);
  const [searching, setSearching] = useState(false);

  // Készletből gépépítés / szerkesztés
  const [editingBuild, setEditingBuild] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [buildName, setBuildName] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSold, setIsSold] = useState(false);
  const [soldPrice, setSoldPrice] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!qText.trim()) return;
    setSearching(true);
    try {
      const [ha, vi] = await Promise.allSettled([
        source !== 1 ? callHardveraproTop3({ query: qText.trim() }) : Promise.resolve({ data: { top3: [] } }),
        source !== 0 ? callVintedTop3({ query: qText.trim() }) : Promise.resolve({ data: { top3: [] } })
      ]);
      const combined = [
        ...(ha.status === "fulfilled" ? ha.value.data?.top3 || [] : []),
        ...(vi.status === "fulfilled" ? vi.value.data?.top3 || [] : [])
      ];
      setOffers(combined.sort((a, b) => a.price - b.price).slice(0, 3));
    } finally {
      setSearching(false);
    }
  }

  function openNewBuild() {
    setEditingBuild(null);
    setBuildName("");
    setSelectedIds([]);
    setIsSold(false);
    setSoldPrice("");
    setShowEditor(true);
  }

  function openEditBuild(b) {
    setEditingBuild(b);
    setBuildName(b.name);
    setSelectedIds(b.partIds || []);
    setIsSold(b.status === "Eladva");
    setSoldPrice(b.soldPrice ? String(b.soldPrice) : "");
    setShowEditor(true);
  }

  function togglePart(id) {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const selectableParts = parts.filter((p) => p.status === "Készleten" || selectedIds.includes(p.id));
  const selectedParts = parts.filter((p) => selectedIds.includes(p.id));
  const totalCost = selectedParts.reduce((s, p) => s + (p.purchasePrice || 0), 0);

  async function saveBuild(e) {
    e.preventDefault();
    if (!buildName.trim() || selectedIds.length === 0) return;
    if (isSold && Number(soldPrice) <= 0) return;

    const batch = writeBatch(db);
    const buildId = editingBuild?.id || doc(collection(db, "builds")).id;
    const buildRef = doc(db, "builds", buildId);

    if (editingBuild) {
      const removed = (editingBuild.partIds || []).filter((id) => !selectedIds.includes(id));
      for (const remId of removed) {
        batch.update(doc(db, "parts", remId), { status: "Készleten", buildId: null, soldAt: null });
      }
    }

    for (const pid of selectedIds) {
      batch.update(doc(db, "parts", pid), {
        status: isSold ? "Eladva" : "Gépbe építve",
        buildId,
        soldAt: isSold ? Date.now() : null
      });
    }

    batch.set(buildRef, {
      name: buildName.trim(),
      partIds: selectedIds,
      totalCost,
      status: isSold ? "Eladva" : "Megépítve (Eladásra vár)",
      soldPrice: isSold ? Number(soldPrice) : null,
      createdAt: editingBuild?.createdAt || Date.now(),
      soldAt: isSold ? (editingBuild?.soldAt || Date.now()) : null
    });

    await batch.commit();
    setShowEditor(false);
  }

  async function dismantleBuild(b) {
    const batch = writeBatch(db);
    for (const pid of b.partIds || []) {
      batch.update(doc(db, "parts", pid), { status: "Készleten", buildId: null, soldAt: null });
    }
    batch.delete(doc(db, "builds", b.id));
    await batch.commit();
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Gépösszeállító</h2>
        <div className="row">
          <button className={`btn ${mode === "builds" ? "" : "btn-ghost"}`} onClick={() => setMode("builds")}>Gépek & Készlet</button>
          <button className={`btn ${mode === "search" ? "" : "btn-ghost"}`} onClick={() => setMode("search")}>HA / Vinted Top 3</button>
        </div>
      </div>

      {mode === "builds" && (
        <>
          <div style={{ marginBottom: 12 }}>
            <button className="btn btn-green" onClick={openNewBuild}>+ Új gép készletből</button>
          </div>

          {showEditor && (
            <form className="card" onSubmit={saveBuild}>
              <h3 style={{ marginTop: 0 }}>{editingBuild ? "Gép szerkesztése" : "Új gép összeállítása"}</h3>
              <input placeholder="Gép neve (pl. Ryzen 5600 + RTX 3070)" value={buildName} onChange={(e) => setBuildName(e.target.value)} required />

              <div className="muted" style={{ margin: "10px 0 6px" }}>Válaszd ki a beépített alkatrészeket:</div>
              {selectableParts.map((p) => (
                <label key={p.id} className="row" style={{ padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                  <span>
                    <input type="checkbox" style={{ width: "auto", marginRight: 8 }} checked={selectedIds.includes(p.id)} onChange={() => togglePart(p.id)} />
                    {p.name} <span className="muted">({p.category})</span>
                  </span>
                  <span>{p.purchasePrice?.toLocaleString("hu-HU")} Ft</span>
                </label>
              ))}

              <div className="row" style={{ marginTop: 12 }}>
                <strong>Bekerülési ár:</strong>
                <strong>{totalCost.toLocaleString("hu-HU")} Ft</strong>
              </div>

              <div style={{ marginTop: 10 }}>
                <label>
                  <input type="checkbox" style={{ width: "auto" }} checked={isSold} onChange={(e) => setIsSold(e.target.checked)} /> Gép eladva egyben
                </label>
              </div>

              {isSold && (
                <div style={{ marginTop: 8 }}>
                  <input type="number" placeholder="Gép eladási ára egyben (Ft)" value={soldPrice} onChange={(e) => setSoldPrice(e.target.value)} required />
                </div>
              )}

              <div className="row" style={{ marginTop: 12 }}>
                <button className="btn btn-green" type="submit">Mentés</button>
                <button className="btn btn-ghost" type="button" onClick={() => setShowEditor(false)}>Mégse</button>
              </div>
            </form>
          )}

          <div className="grid-2">
            {builds.map((b) => {
              const builtNames = parts.filter((p) => (b.partIds || []).includes(p.id)).map((p) => p.name).join(" • ");
              const profit = b.status === "Eladva" && b.soldPrice ? b.soldPrice - (b.totalCost || 0) : null;
              return (
                <div className="card" key={b.id}>
                  <div className="row">
                    <strong>{b.name}</strong>
                    <span className={`badge ${b.status === "Eladva" ? "badge-green" : "badge-indigo"}`}>{b.status}</span>
                  </div>
                  <div className="muted" style={{ marginTop: 6 }}>{builtNames || "Alkatrészek"}</div>
                  <div className="row" style={{ marginTop: 10 }}>
                    <span className="muted">Bekerülés: {b.totalCost?.toLocaleString("hu-HU")} Ft</span>
                    {profit !== null && (
                      <strong className={profit >= 0 ? "green" : "red"}>
                        Eladva: {b.soldPrice?.toLocaleString("hu-HU")} Ft ({profit >= 0 ? "+" : ""}{profit.toLocaleString("hu-HU")} Ft)
                      </strong>
                    )}
                  </div>
                  <div className="row" style={{ marginTop: 10 }}>
                    <button className="btn btn-ghost" onClick={() => openEditBuild(b)}>Szerkesztés</button>
                    <button className="btn btn-red" onClick={() => dismantleBuild(b)}><Trash2 size={14} /> Szétszedés</button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {mode === "search" && (
        <div className="card">
          <div className="row" style={{ marginBottom: 10 }}>
            <button className={`btn ${source === 0 ? "" : "btn-ghost"}`} onClick={() => setSource(0)}>HardverApró</button>
            <button className={`btn ${source === 1 ? "" : "btn-ghost"}`} onClick={() => setSource(1)}>Vinted</button>
            <button className={`btn ${source === 2 ? "" : "btn-ghost"}`} onClick={() => setSource(2)}>Mindkettő</button>
          </div>
          <form className="row" onSubmit={handleSearch}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <input placeholder="Keresett alkatrész (pl. RTX 3070)..." value={qText} onChange={(e) => setQText(e.target.value)} />
            </div>
            <button className="btn" type="submit" disabled={searching}>
              <Search size={15} /> {searching ? "Keresés..." : "Top 3 Ár"}
            </button>
          </form>

          {offers.map((o, i) => (
            <div className="offer-box row" key={o.url + i}>
              <div>
                <strong className={i === 0 ? "green" : ""}>#{i + 1} {o.price?.toLocaleString("hu-HU")} Ft (+{o.sellerPositiveRating})</strong>
                <div className="muted">{o.title}</div>
              </div>
              <a href={o.url} target="_blank" rel="noreferrer" style={{ color: "#60a5fa" }}><ExternalLink size={16} /></a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
