import React, { useMemo, useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Plus, X, Cpu, Trash2, Pencil } from "lucide-react";
import { db } from "../firebase";

const SLOT_CATEGORIES = [
  { key: "cpu", label: "Processzor", category: "Processzor", multi: false },
  { key: "gpu", label: "Videókártya", category: "Videókártya", multi: false },
  { key: "motherboard", label: "Alaplap", category: "Alaplap", multi: false },
  { key: "ram", label: "Memória (RAM)", category: "Memória", multi: true },
  { key: "storage", label: "Háttértár (SSD/HDD)", category: "Háttértár", multi: true },
  { key: "psu", label: "Tápegység", category: "Tápegység", multi: false },
  { key: "case", label: "Ház", category: "Ház", multi: false },
  { key: "cooler", label: "Hűtő", category: "Hűtő", multi: false }
];

const EMPTY_SINGLE = {
  cpu: "",
  gpu: "",
  motherboard: "",
  psu: "",
  case: "",
  cooler: ""
};

const EMPTY_MULTI = {
  ram: [""],
  storage: [""]
};

export default function BuildsTab({ parts = [], builds = [] }) {
  const [showBuilder, setShowBuilder] = useState(false);
  const [editingBuild, setEditingBuild] = useState(null);
  const [buildName, setBuildName] = useState("");
  const [soldTogether, setSoldTogether] = useState(false);
  const [soldPrice, setSoldPrice] = useState("");
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [singleSelection, setSingleSelection] = useState(EMPTY_SINGLE);
  const [multiSelection, setMultiSelection] = useState(EMPTY_MULTI);

  // Szerkesztéskor a gép saját alkatrészei + a szabad készleten lévő alkatrészek elérhetők
  const candidateParts = useMemo(() => {
    const editingIds = new Set(editingBuild?.partIds || []);
    return parts.filter(
      (p) =>
        editingIds.has(p.id) ||
        (p.status === "Készleten" && !p.buildId)
    );
  }, [parts, editingBuild]);

  const selectedIds = useMemo(() => {
    const ids = Object.values(singleSelection).filter(Boolean);
    Object.values(multiSelection).forEach((arr) => {
      (arr || []).forEach((id) => {
        if (id) ids.push(id);
      });
    });
    return ids;
  }, [singleSelection, multiSelection]);

  const selectedParts = useMemo(() => {
    const map = new Map(candidateParts.map((p) => [p.id, p]));
    return selectedIds.map((id) => map.get(id)).filter(Boolean);
  }, [candidateParts, selectedIds]);

  const totalCost = useMemo(
    () => selectedParts.reduce((sum, p) => sum + Number(p.purchasePrice || 0), 0),
    [selectedParts]
  );

  function resetBuilder() {
    setEditingBuild(null);
    setBuildName("");
    setSoldTogether(false);
    setSoldPrice("");
    setErrorMsg("");
    setSingleSelection(EMPTY_SINGLE);
    setMultiSelection(EMPTY_MULTI);
  }

  function openNewBuild() {
    resetBuilder();
    setShowBuilder(true);
  }

  function openEditBuild(build) {
    const buildPartIdSet = new Set(build.partIds || []);
    const matchedParts = parts.filter((p) => buildPartIdSet.has(p.id));

    const nextSingle = { ...EMPTY_SINGLE };
    const nextMulti = { ram: [], storage: [] };
    const usedIds = new Set();

    SLOT_CATEGORIES.forEach((slot) => {
      const catMatches = matchedParts.filter(
        (p) => (p.category || "").toLowerCase() === slot.category.toLowerCase()
      );
      if (!slot.multi) {
        if (catMatches[0]) {
          nextSingle[slot.key] = catMatches[0].id;
          usedIds.add(catMatches[0].id);
        }
      } else {
        catMatches.forEach((p) => {
          nextMulti[slot.key].push(p.id);
          usedIds.add(p.id);
        });
        if (nextMulti[slot.key].length === 0) {
          nextMulti[slot.key].push("");
        }
      }
    });

    // Ha volt olyan alkatrész a gépben, aminek a kategóriája nem egyezett meg pontosan a slot nevével, tegyük be a storage/ram slotba, hogy ne vesszen el
    const leftover = matchedParts.filter((p) => !usedIds.has(p.id));
    if (leftover.length > 0) {
      const existingStorage = nextMulti.storage.filter(Boolean);
      nextMulti.storage = [...existingStorage, ...leftover.map((p) => p.id)];
    }

    setEditingBuild(build);
    setBuildName(build.name || "");
    const isSold = build.status === "Eladva";
    setSoldTogether(isSold);
    setSoldPrice(isSold && build.soldPrice !== null && build.soldPrice !== undefined ? String(build.soldPrice) : "");
    setSingleSelection(nextSingle);
    setMultiSelection(nextMulti);
    setErrorMsg("");
    setShowBuilder(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSingleChange(slotKey, partId) {
    setSingleSelection((prev) => ({ ...prev, [slotKey]: partId }));
  }

  function handleMultiChange(slotKey, index, partId) {
    setMultiSelection((prev) => {
      const nextArr = [...(prev[slotKey] || [""])];
      nextArr[index] = partId;
      return { ...prev, [slotKey]: nextArr };
    });
  }

  function addMultiSlot(slotKey) {
    setMultiSelection((prev) => ({
      ...prev,
      [slotKey]: [...(prev[slotKey] || [""]), ""]
    }));
  }

  function removeMultiSlot(slotKey, index) {
    setMultiSelection((prev) => {
      const nextArr = (prev[slotKey] || [""]).filter((_, i) => i !== index);
      return { ...prev, [slotKey]: nextArr.length ? nextArr : [""] };
    });
  }

  function getOptionsForSlot(categoryName, currentSelectedId) {
    return candidateParts.filter((p) => {
      const matchesCat = (p.category || "").toLowerCase() === categoryName.toLowerCase();
      if (!matchesCat) return false;
      if (p.id === currentSelectedId) return true;
      return !selectedIds.includes(p.id);
    });
  }

  async function handleSaveBuild(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!buildName.trim()) {
      setErrorMsg("Add meg a gép nevét.");
      return;
    }
    if (selectedParts.length === 0) {
      setErrorMsg("Válassz ki legalább egy alkatrészt.");
      return;
    }

    const numericSoldPrice = soldTogether ? Number(soldPrice) : null;
    if (soldTogether && (soldPrice.trim() === "" || Number.isNaN(numericSoldPrice) || numericSoldPrice < 0)) {
      setErrorMsg("Add meg a gép eladási árát.");
      return;
    }

    setSaving(true);
    try {
      const now = Date.now();
      const nextStatus = soldTogether ? "Eladva" : "Összerakva";
      const nextPartIds = selectedParts.map((p) => p.id);
      const payload = {
        name: buildName.trim(),
        partIds: nextPartIds,
        partsSummary: selectedParts.map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category || "",
          serialNumber: p.serialNumber || "",
          purchasePrice: Number(p.purchasePrice || 0)
        })),
        totalCost,
        status: nextStatus,
        soldPrice: soldTogether ? numericSoldPrice : null,
        soldAt: soldTogether ? (editingBuild?.soldAt || now) : null
      };

      let targetBuildId = editingBuild?.id;
      if (editingBuild) {
        await updateDoc(doc(db, "builds", editingBuild.id), payload);
      } else {
        const created = await addDoc(collection(db, "builds"), {
          ...payload,
          createdAt: now
        });
        targetBuildId = created.id;
      }

      // Korábban a géphez tartozó, de most kikerült alkatrészek felszabadítása
      const previousIds = Array.isArray(editingBuild?.partIds) ? editingBuild.partIds : [];
      const removedIds = previousIds.filter((id) => !nextPartIds.includes(id));

      await Promise.all([
        ...removedIds.map((pid) =>
          updateDoc(doc(db, "parts", pid), {
            buildId: null,
            status: "Készleten",
            soldAt: null
          }).catch(() => null)
        ),
        ...selectedParts.map((part) =>
          updateDoc(doc(db, "parts", part.id), {
            buildId: targetBuildId,
            status: soldTogether ? "Eladva" : "Beépítve",
            ...(soldTogether ? { soldAt: editingBuild?.soldAt || now } : { soldAt: null })
          }).catch(() => null)
        )
      ]);

      resetBuilder();
      setShowBuilder(false);
    } catch (err) {
      console.error("Gép mentési hiba:", err);
      setErrorMsg(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleSellExistingBuild(build) {
    const raw = prompt(`${build.name} eladási ára (Ft):`, String(build.soldPrice ?? build.totalCost ?? 0));
    if (raw === null || raw.trim() === "") return;
    const price = Number(raw);
    if (Number.isNaN(price) || price < 0) return;

    const now = build.soldAt || Date.now();
    await updateDoc(doc(db, "builds", build.id), {
      status: "Eladva",
      soldPrice: price,
      soldAt: now
    });

    if (Array.isArray(build.partIds) && build.partIds.length > 0) {
      await Promise.all(
        build.partIds.map((pid) =>
          updateDoc(doc(db, "parts", pid), {
            status: "Eladva",
            soldAt: now
          }).catch(() => null)
        )
      );
    }
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Gépösszeállító</h2>
        <button
          className="btn btn-green"
          onClick={() => {
            if (showBuilder) resetBuilder();
            else openNewBuild();
          }}
        >
          {showBuilder ? <X size={16} /> : <Plus size={16} />}
          {showBuilder ? "Bezárás" : "Új gép készletből"}
        </button>
      </div>

      {showBuilder && (
        <form className="card" onSubmit={handleSaveBuild} style={{ marginBottom: 16 }}>
          <div className="row" style={{ marginBottom: 10 }}>
            <h3 style={{ margin: 0 }}>
              {editingBuild ? `Gép szerkesztése: ${editingBuild.name}` : "Új gép összeállítása alkatrészenként"}
            </h3>
            {editingBuild && (
              <span className={`badge ${editingBuild.status === "Eladva" ? "badge-green" : "badge-blue"}`}>
                {editingBuild.status || "Összerakva"}
              </span>
            )}
          </div>

          <div style={{ marginBottom: 14 }}>
            <input
              placeholder="Gép neve (pl. Ryzen 5600 + RTX 3060)"
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              required
            />
          </div>

          <div className="grid-2" style={{ gap: 12 }}>
            {SLOT_CATEGORIES.map((slot) => {
              if (!slot.multi) {
                const currentId = singleSelection[slot.key] || "";
                const options = getOptionsForSlot(slot.category, currentId);

                return (
                  <div
                    key={slot.key}
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.02)"
                    }}
                  >
                    <div className="row" style={{ marginBottom: 6 }}>
                      <strong>{slot.label}</strong>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {options.length} elérhető
                      </span>
                    </div>
                    <select
                      value={currentId}
                      onChange={(e) => handleSingleChange(slot.key, e.target.value)}
                    >
                      <option value="">-- Nincs kiválasztva --</option>
                      {options.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({Number(p.purchasePrice || 0).toLocaleString("hu-HU")} Ft)
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              const slotIds = multiSelection[slot.key] || [""];
              return (
                <div
                  key={slot.key}
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.02)"
                  }}
                >
                  <div className="row" style={{ marginBottom: 6 }}>
                    <strong>{slot.label}</strong>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      style={{ padding: "3px 8px", fontSize: 12 }}
                      onClick={() => addMultiSlot(slot.key)}
                    >
                      <Plus size={12} /> Modul / meghajtó
                    </button>
                  </div>

                  {slotIds.map((partId, idx) => {
                    const options = getOptionsForSlot(slot.category, partId);
                    return (
                      <div className="row" key={`${slot.key}-${idx}`} style={{ marginBottom: 6, gap: 6 }}>
                        <select
                          value={partId}
                          onChange={(e) => handleMultiChange(slot.key, idx, e.target.value)}
                        >
                          <option value="">-- Válassz {slot.label.toLowerCase()} --</option>
                          {options.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} ({Number(p.purchasePrice || 0).toLocaleString("hu-HU")} Ft)
                            </option>
                          ))}
                        </select>
                        {slotIds.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-red"
                            style={{ padding: "6px 8px" }}
                            onClick={() => removeMultiSlot(slot.key, idx)}
                            title="Slot törlése"
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 14,
              padding: 12,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <div className="row">
              <strong>Bekerülési ár:</strong>
              <strong style={{ fontSize: 16, color: "#60a5fa" }}>
                {totalCost.toLocaleString("hu-HU")} Ft
              </strong>
            </div>

            {selectedParts.length > 0 && (
              <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
                Kiválasztva: {selectedParts.map((p) => `${p.name} (${Number(p.purchasePrice || 0).toLocaleString("hu-HU")} Ft)`).join(" • ")}
              </div>
            )}

            <div className="row" style={{ marginTop: 10 }}>
              <label>
                <input
                  type="checkbox"
                  style={{ width: "auto" }}
                  checked={soldTogether}
                  onChange={(e) => setSoldTogether(e.target.checked)}
                />{" "}
                Gép eladva egyben
              </label>
              {soldTogether && (
                <input
                  type="number"
                  min="0"
                  placeholder="Eladási ár (Ft)"
                  value={soldPrice}
                  onChange={(e) => setSoldPrice(e.target.value)}
                  style={{ maxWidth: 220 }}
                  required
                />
              )}
            </div>
          </div>

          {errorMsg && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {errorMsg}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={saving}>
              {saving ? "Mentés..." : editingBuild ? "Módosítások mentése" : "Mentés"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                resetBuilder();
                setShowBuilder(false);
              }}
            >
              Mégse
            </button>
          </div>
        </form>
      )}

      <div className="grid-2">
        {builds.map((b) => {
          const items = Array.isArray(b.partsSummary) ? b.partsSummary : [];
          const cost = Number(b.totalCost || 0);
          const sold = b.soldPrice !== null && b.soldPrice !== undefined ? Number(b.soldPrice) : null;
          const isSold = b.status === "Eladva";
          const profit = isSold && sold !== null ? sold - cost : null;

          return (
            <div
              className="card"
              key={b.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 12,
                borderRadius: 12
              }}
            >
              <div>
                {/* Fejléc: Gép neve + státusz */}
                <div className="row" style={{ marginBottom: 10 }}>
                  <div className="row" style={{ gap: 8 }}>
                    <Cpu size={18} color="#60a5fa" />
                    <strong style={{ fontSize: 16 }}>{b.name}</strong>
                  </div>
                  <span className={`badge ${isSold ? "badge-green" : "badge-blue"}`}>
                    {b.status || "Összerakva"}
                  </span>
                </div>

                {/* Pénzügyi összefoglaló sáv */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isSold && profit !== null ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                    gap: 8,
                    padding: 10,
                    borderRadius: 8,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border)",
                    marginBottom: 12
                  }}
                >
                  <div>
                    <div className="muted" style={{ fontSize: 11 }}>Bekerülés</div>
                    <strong style={{ fontSize: 13 }}>{cost.toLocaleString("hu-HU")} Ft</strong>
                  </div>

                  {isSold && sold !== null ? (
                    <>
                      <div>
                        <div className="muted" style={{ fontSize: 11 }}>Eladva</div>
                        <strong style={{ fontSize: 13, color: "#60a5fa" }}>
                          {sold.toLocaleString("hu-HU")} Ft
                        </strong>
                      </div>
                      <div>
                        <div className="muted" style={{ fontSize: 11 }}>Profit</div>
                        <strong style={{ fontSize: 13 }} className={profit >= 0 ? "green" : "red"}>
                          {profit >= 0 ? "+" : ""}
                          {profit.toLocaleString("hu-HU")} Ft
                        </strong>
                      </div>
                    </>
                  ) : (
                    <div>
                      <div className="muted" style={{ fontSize: 11 }}>Állapot</div>
                      <strong style={{ fontSize: 13 }}>Eladásra vár</strong>
                    </div>
                  )}
                </div>

                {/* Alkatrészek listája */}
                {items.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {items.map((item, idx) => (
                      <div
                        key={`${item.id || idx}-${idx}`}
                        className="row"
                        style={{
                          padding: "6px 0",
                          borderBottom: idx < items.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                          gap: 8
                        }}
                      >
                        <div className="row" style={{ gap: 8, minWidth: 0 }}>
                          {item.category && (
                            <span
                              className="badge badge-indigo"
                              style={{ fontSize: 11, padding: "2px 7px", flexShrink: 0 }}
                            >
                              {item.category}
                            </span>
                          )}
                          <span style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis" }}>
                            {item.name}
                          </span>
                        </div>
                        <span
                          className="muted"
                          style={{ fontSize: 13, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}
                        >
                          {Number(item.purchasePrice || 0).toLocaleString("hu-HU")} Ft
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Lábléc gombok */}
              <div className="row" style={{ paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <button className="btn btn-ghost" onClick={() => openEditBuild(b)}>
                  <Pencil size={14} /> Szerkesztés
                </button>
                {!isSold && (
                  <button className="btn btn-green" onClick={() => handleSellExistingBuild(b)}>
                    Eladás rögzítése
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
