import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { Plus, X, Flame, Trash2, ExternalLink } from "lucide-react";
import { db } from "../firebase";

export default function DealHunterTab({ dealWatches = [], foundDeals = [] }) {
  const [showAddWatch, setShowAddWatch] = useState(false);
  const [queryText, setQueryText] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [savingWatch, setSavingWatch] = useState(false);
  const [watchError, setWatchError] = useState("");

  // Törlés megerősítő modálok
  const [deleteTargetWatch, setDeleteTargetWatch] = useState(null);
  const [deleteTargetDeal, setDeleteTargetDeal] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  async function handleAddWatch(e) {
    e.preventDefault();
    setWatchError("");

    const cleanQuery = queryText.trim();
    const numericMax = maxPrice.trim() === "" ? null : Number(maxPrice);

    if (!cleanQuery) {
      setWatchError("Add meg a keresett alkatrész vagy gép nevét.");
      return;
    }
    if (numericMax !== null && (Number.isNaN(numericMax) || numericMax < 0)) {
      setWatchError("A maximum ár nem lehet negatív.");
      return;
    }

    setSavingWatch(true);
    try {
      await addDoc(collection(db, "deal_watches"), {
        query: cleanQuery,
        maxPrice: numericMax,
        active: true,
        createdAt: Date.now()
      });
      setQueryText("");
      setMaxPrice("");
      setShowAddWatch(false);
    } catch (err) {
      console.error("Figyelés mentési hiba:", err);
      setWatchError(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingWatch(false);
    }
  }

  async function handleConfirmDeleteWatch() {
    if (!deleteTargetWatch) return;
    const target = deleteTargetWatch;
    setDeleteTargetWatch(null);
    setDeletingId(target.id);
    try {
      await deleteDoc(doc(db, "deal_watches", target.id));
    } finally {
      setDeletingId(null);
    }
  }

  async function handleConfirmDeleteDeal() {
    if (!deleteTargetDeal) return;
    const target = deleteTargetDeal;
    setDeleteTargetDeal(null);
    setDeletingId(target.id);
    try {
      await deleteDoc(doc(db, "found_deals", target.id));
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <div className="row" style={{ gap: 8 }}>
          <Flame size={20} color="#f97316" />
          <h2 style={{ margin: 0 }}>Deal Hunter</h2>
        </div>
        <button
          className="btn btn-green"
          onClick={() => {
            setWatchError("");
            setShowAddWatch((v) => !v);
          }}
        >
          {showAddWatch ? <X size={16} /> : <Plus size={16} />}
          {showAddWatch ? "Bezárás" : "Új figyelés"}
        </button>
      </div>

      {showAddWatch && (
        <form className="card" onSubmit={handleAddWatch} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>Új keresési figyelés felvétele</h3>
          <div className="grid-2">
            <input
              placeholder="Keresett tétel (pl. RTX 3060 Ti / Ryzen 5600)"
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              required
            />
            <input
              type="number"
              min="0"
              placeholder="Maximum célár (Ft, opcionális)"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          {watchError && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {watchError}
            </div>
          )}
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={savingWatch}>
              {savingWatch ? "Mentés..." : "Figyelés mentése"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowAddWatch(false)}
            >
              Mégse
            </button>
          </div>
        </form>
      )}

      {/* Aktív figyelések */}
      <div className="card" style={{ marginBottom: 16, borderRadius: 12 }}>
        <h3 style={{ marginTop: 0 }}>Aktív figyelések ({dealWatches.length})</h3>
        {dealWatches.length === 0 ? (
          <div className="muted">Még nincs beállított figyelés.</div>
        ) : (
          dealWatches.map((w) => (
            <div
              key={w.id}
              className="row"
              style={{
                padding: "8px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div>
                <strong>{w.query}</strong>
                {w.maxPrice !== null && w.maxPrice !== undefined && (
                  <span className="muted" style={{ marginLeft: 8, fontSize: 12 }}>
                    Max: <strong>{Number(w.maxPrice).toLocaleString("hu-HU")} Ft</strong>
                  </span>
                )}
              </div>
              <button
                type="button"
                className="btn btn-red"
                style={{ padding: "4px 8px" }}
                disabled={deletingId === w.id}
                onClick={() => setDeleteTargetWatch(w)}
                title="Figyelés törlése"
              >
                <Trash2 size={13} /> Törlés
              </button>
            </div>
          ))
        )}
      </div>

      {/* Talált ajánlatok */}
      <div className="card" style={{ borderRadius: 12 }}>
        <h3 style={{ marginTop: 0 }}>Talált ajánlatok ({foundDeals.length})</h3>
        {foundDeals.length === 0 ? (
          <div className="muted">Még nincs rögzített találat.</div>
        ) : (
          foundDeals.map((deal) => (
            <div
              key={deal.id}
              className="row"
              style={{
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
                gap: 10
              }}
            >
              <div style={{ minWidth: 0 }}>
                <strong style={{ fontSize: 14 }}>{deal.title || deal.query || "Ajánlat"}</strong>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  {deal.price !== undefined && deal.price !== null && (
                    <strong className="green" style={{ marginRight: 8 }}>
                      {Number(deal.price).toLocaleString("hu-HU")} Ft
                    </strong>
                  )}
                  {deal.query && <span>Keresés: {deal.query}</span>}
                </div>
                {deal.url && (
                  <div style={{ marginTop: 4 }}>
                    <a
                      href={deal.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#60a5fa",
                        fontSize: 12,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4
                      }}
                    >
                      <ExternalLink size={12} /> Hirdetés megnyitása
                    </a>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="btn btn-red"
                style={{ padding: "4px 8px" }}
                disabled={deletingId === deal.id}
                onClick={() => setDeleteTargetDeal(deal)}
                title="Találat törlése"
              >
                <Trash2 size={13} /> Törlés
              </button>
            </div>
          ))
        )}
      </div>

      {/* Figyelés törlése megerősítő modál */}
      {deleteTargetWatch && (
        <div
          onClick={() => setDeleteTargetWatch(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 1000
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 420, margin: 0, borderRadius: 12 }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Figyelés törlése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setDeleteTargetWatch(null)}
              >
                <X size={16} />
              </button>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Biztosan törlöd ezt a figyelést: <strong>{deleteTargetWatch.query}</strong>?
            </div>
            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDeleteTargetWatch(null)}
              >
                Mégse
              </button>
              <button
                type="button"
                className="btn btn-red"
                onClick={handleConfirmDeleteWatch}
              >
                <Trash2 size={14} /> Igen, törlöm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Találat törlése megerősítő modál */}
      {deleteTargetDeal && (
        <div
          onClick={() => setDeleteTargetDeal(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 1000
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 420, margin: 0, borderRadius: 12 }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Találat törlése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setDeleteTargetDeal(null)}
              >
                <X size={16} />
              </button>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Biztosan törlöd ezt a talált ajánlatot:{" "}
              <strong>{deleteTargetDeal.title || deleteTargetDeal.query || "Ajánlat"}</strong>?
            </div>
            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDeleteTargetDeal(null)}
              >
                Mégse
              </button>
              <button
                type="button"
                className="btn btn-red"
                onClick={handleConfirmDeleteDeal}
              >
                <Trash2 size={14} /> Igen, törlöm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
