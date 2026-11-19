import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { BellPlus, ExternalLink, Trash2 } from "lucide-react";
import { db } from "../firebase";

export default function DealHunterTab({ dealWatches, foundDeals }) {
  const [queryText, setQueryText] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [source, setSource] = useState(2);

  async function addWatch(e) {
    e.preventDefault();
    if (!queryText.trim() || Number(maxPrice) <= 0) return;
    await addDoc(collection(db, "deal_watches"), {
      query: queryText.trim(),
      maxPrice: Number(maxPrice),
      source,
      enabled: true,
      notifiedUrls: [],
      createdAt: Date.now()
    });
    setQueryText("");
    setMaxPrice("");
  }

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Deal Hunter (15 percenként)</h2>

      <form className="card" onSubmit={addWatch}>
        <div className="grid-2">
          <input placeholder="Kulcsszó (pl. RTX 3070)" value={queryText} onChange={(e) => setQueryText(e.target.value)} required />
          <input type="number" placeholder="Célár (Ft) — ez alatt mindenről jelez" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} required />
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="row">
            <button type="button" className={`btn ${source === 0 ? "" : "btn-ghost"}`} onClick={() => setSource(0)}>HA</button>
            <button type="button" className={`btn ${source === 1 ? "" : "btn-ghost"}`} onClick={() => setSource(1)}>Vinted</button>
            <button type="button" className={`btn ${source === 2 ? "" : "btn-ghost"}`} onClick={() => setSource(2)}>Mindkettő</button>
          </div>
          <button className="btn btn-green" type="submit"><BellPlus size={15} /> Figyelés indítása</button>
        </div>
      </form>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Talált akciók ({foundDeals.length})</h3>
        {foundDeals.length === 0 ? (
          <div className="muted">Még nincs célár alatt talált akció.</div>
        ) : (
          foundDeals.map((d) => (
            <div className="offer-box row" key={d.id}>
              <div>
                <strong className="green">{d.query} • {d.price?.toLocaleString("hu-HU")} Ft</strong>
                <div>{d.title}</div>
                <div className="muted">Célár: {d.maxPrice?.toLocaleString("hu-HU")} Ft • Eladó: +{d.sellerPositiveRating}</div>
              </div>
              <div className="row">
                <a href={d.url} target="_blank" rel="noreferrer" className="btn btn-ghost"><ExternalLink size={14} /> Megnyit</a>
                <button className="btn btn-red" onClick={() => deleteDoc(doc(db, "found_deals", d.id))}><Trash2 size={14} /></button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Aktív figyelőszabályok</h3>
        {dealWatches.map((w) => (
          <div className="row" key={w.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
            <div>
              <strong>{w.query}</strong>
              <div className="muted">Max: {w.maxPrice?.toLocaleString("hu-HU")} Ft</div>
            </div>
            <div className="row">
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={!!w.enabled}
                onChange={() => updateDoc(doc(db, "deal_watches", w.id), { enabled: !w.enabled })}
              />
              <button className="btn btn-red" onClick={() => deleteDoc(doc(db, "deal_watches", w.id))}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
