import React, { useEffect, useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Plus, X, Cpu, Trash2, Pencil, Check, Camera } from "lucide-react";
import { db, storage } from "../firebase";

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

function createPhotoSlot() {
  return {
    uid: `pc-slot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    file: null
  };
}

async function uploadBuildPhotoSlots(slots) {
  const validSlots = (slots || []).filter((s) => s?.file);
  if (validSlots.length === 0) return [];

  return Promise.all(
    validSlots.map(async (slot, idx) => {
      const file = slot.file;
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const sRef = ref(storage, `build_photos/${Date.now()}_${idx}_${safeName}`);
      await uploadBytes(sRef, file);
      const url = await getDownloadURL(sRef);
      return {
        id: `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        url
      };
    })
  );
}

function getBuildPhotoList(build) {
  const result = [];
  const seen = new Set();

  if (Array.isArray(build?.photos)) {
    build.photos.forEach((ph, idx) => {
      const url = typeof ph === "string" ? ph : ph?.url;
      if (!url || seen.has(url)) return;
      seen.add(url);
      result.push({
        id: (typeof ph === "object" && ph?.id) || `bph-${idx}-${seen.size}`,
        name: (typeof ph === "object" && ph?.name) || `PC kép ${idx + 1}`,
        url
      });
    });
  }

  return result;
}

function BuildPhotoSlotPreview({ file }) {
  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  if (!previewUrl) return null;

  return (
    <img
      src={previewUrl}
      alt={file?.name || "PC előnézet"}
      style={{
        height: 68,
        width: 92,
        borderRadius: 6,
        objectFit: "cover",
        border: "1px solid var(--border)",
        flexShrink: 0
      }}
    />
  );
}

export default function BuilderTab({ parts = [], builds = [] }) {
  const [showBuilder, setShowBuilder] = useState(false);
  const [editingBuild, setEditingBuild] = useState(null);
  const [buildName, setBuildName] = useState("");
  const [soldTogether, setSoldTogether] = useState(false);
  const [soldPrice, setSoldPrice] = useState("");
  const [existingPhotos, setExistingPhotos] = useState([]);
  const [photoSlots, setPhotoSlots] = useState([]);
  const [saving, setSaving] = useState(false);
  const [deletingBuildId, setDeletingBuildId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Eladás modal állapota
  const [sellModalBuild, setSellModalBuild] = useState(null);
  const [sellModalPrice, setSellModalPrice] = useState("");
  const [sellModalError, setSellModalError] = useState("");
  const [sellingInModal, setSellingInModal] = useState(false);

  // Törlés megerősítő modal állapota
  const [deleteModalBuild, setDeleteModalBuild] = useState(null);

  const [singleSelection, setSingleSelection] = useState(EMPTY_SINGLE);
  const [multiSelection, setMultiSelection] = useState(EMPTY_MULTI);

  const candidateParts = useMemo(() => {
    const editingIds = new Set(editingBuild?.partIds || []);
    return (parts || []).filter(
      (p) =>
        editingIds.has(p.id) ||
        ((p.status || "Készleten") === "Készleten" && !p.buildId)
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
    setExistingPhotos([]);
    setPhotoSlots([]);
    setErrorMsg("");
    setSingleSelection(EMPTY_SINGLE);
    setMultiSelection(EMPTY_MULTI);
  }

  function openNewBuild() {
    resetBuilder();
    setPhotoSlots([createPhotoSlot()]);
    setShowBuilder(true);
  }

  function openEditBuild(build) {
    const buildPartIdSet = new Set(build.partIds || []);
    const matchedParts = (parts || []).filter((p) => buildPartIdSet.has(p.id));

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

    const leftover = matchedParts.filter((p) => !usedIds.has(p.id));
    if (leftover.length > 0) {
      const existingStorage = nextMulti.storage.filter(Boolean);
      nextMulti.storage = [...existingStorage, ...leftover.map((p) => p.id)];
    }

    setEditingBuild(build);
    setBuildName(build.name || "");
    const isSold = build.status === "Eladva";
    setSoldTogether(isSold);
    setSoldPrice(
      isSold && build.soldPrice !== null && build.soldPrice !== undefined
        ? String(build.soldPrice)
        : ""
    );
    setExistingPhotos(getBuildPhotoList(build));
    setPhotoSlots([]);
    setSingleSelection(nextSingle);
    setMultiSelection(nextMulti);
    setErrorMsg("");
    setShowBuilder(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleAddBuildPhotoSlot() {
    setPhotoSlots((prev) => [...prev, createPhotoSlot()]);
  }

  function handleBuildPhotoSlotFileChange(uid, file) {
    setPhotoSlots((prev) =>
      prev.map((slot) => (slot.uid === uid ? { ...slot, file: file || null } : slot))
    );
  }

  function handleRemoveBuildPhotoSlot(uid) {
    setPhotoSlots((prev) => prev.filter((slot) => slot.uid !== uid));
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
    if (
      soldTogether &&
      (soldPrice.trim() === "" || Number.isNaN(numericSoldPrice) || numericSoldPrice < 0)
    ) {
      setErrorMsg("Add meg a gép eladási árát.");
      return;
    }

    setSaving(true);
    try {
      const uploadedPhotos = await uploadBuildPhotoSlots(photoSlots);
      const seenUrls = new Set();
      const finalPhotos = [...existingPhotos, ...uploadedPhotos].filter((ph) => {
        if (!ph?.url || seenUrls.has(ph.url)) return false;
        seenUrls.add(ph.url);
        return true;
      });

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
          purchasePrice: Number(p.purchasePrice || 0),
          invoiceFileUrl: p.invoiceFileUrl || null
        })),
        photos: finalPhotos,
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

      const previousIds = Array.isArray(editingBuild?.partIds) ? editingBuild.partIds : [];
      const removedIds = previousIds.filter((id) => !nextPartIds.includes(id));

      await Promise.all([
        ...removedIds.map((pid) =>
          updateDoc(doc(db, "parts", pid), {
            buildId: null,
            status: "Készleten",
            soldAt: null,
            soldPrice: null
          })
        ),
        ...selectedParts.map((part) =>
          updateDoc(doc(db, "parts", part.id), {
            buildId: targetBuildId,
            status: soldTogether ? "Eladva" : "Beépítve",
            ...(soldTogether
              ? { soldAt: editingBuild?.soldAt || now, soldPrice: numericSoldPrice }
              : { soldAt: null, soldPrice: null })
          })
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

  function openSellModal(build) {
    setSellModalBuild(build);
    setSellModalPrice(String(build.soldPrice ?? build.totalCost ?? 0));
    setSellModalError("");
  }

  async function handleConfirmSellModal(e) {
    e.preventDefault();
    if (!sellModalBuild) return;
    setSellModalError("");

    const price = Number(sellModalPrice);
    if (sellModalPrice.trim() === "" || Number.isNaN(price) || price < 0) {
      setSellModalError("Adj meg érvényes eladási árat (0 Ft is lehet).");
      return;
    }

    setSellingInModal(true);
    try {
      const now = sellModalBuild.soldAt || Date.now();
      await updateDoc(doc(db, "builds", sellModalBuild.id), {
        status: "Eladva",
        soldPrice: price,
        soldAt: now
      });

      if (Array.isArray(sellModalBuild.partIds) && sellModalBuild.partIds.length > 0) {
        await Promise.all(
          sellModalBuild.partIds.map((pid) =>
            updateDoc(doc(db, "parts", pid), {
              status: "Eladva",
              soldAt: now
            })
          )
        );
      }

      setSellModalBuild(null);
      setSellModalPrice("");
    } finally {
      setSellingInModal(false);
    }
  }

  async function handleConfirmDeleteBuild() {
    if (!deleteModalBuild) return;
    const build = deleteModalBuild;
    setDeleteModalBuild(null);
    setDeletingBuildId(build.id);

    try {
      const idsFromPartIds = Array.isArray(build.partIds) ? build.partIds : [];
      const idsFromSummary = Array.isArray(build.partsSummary)
        ? build.partsSummary.map((item) => item?.id).filter(Boolean)
        : [];
      const idsFromParts = Array.isArray(build.parts)
        ? build.parts.map((item) => (typeof item === "string" ? item : item?.id)).filter(Boolean)
        : [];

      const allPartIds = Array.from(new Set([...idsFromPartIds, ...idsFromSummary, ...idsFromParts]));

      await Promise.all(
        allPartIds.map((pid) =>
          updateDoc(doc(db, "parts", pid), {
            status: "Készleten",
            buildId: null,
            soldAt: null,
            soldPrice: null
          })
        )
      );

      await deleteDoc(doc(db, "builds", build.id));

      if (editingBuild?.id === build.id) {
        resetBuilder();
        setShowBuilder(false);
      }
    } finally {
      setDeletingBuildId(null);
    }
  }

  const modalCost = Number(sellModalBuild?.totalCost || 0);
  const modalNumericPrice = Number(sellModalPrice);
  const modalPreviewProfit = !Number.isNaN(modalNumericPrice) ? modalNumericPrice - modalCost : null;

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
              {editingBuild
                ? `Gép szerkesztése: ${editingBuild.name}`
                : "Új gép összeállítása alkatrészenként"}
            </h3>
            {editingBuild && (
              <span
                className={`badge ${editingBuild.status === "Eladva" ? "badge-green" : "badge-blue"}`}
              >
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
                      <div
                        className="row"
                        key={`${slot.key}-${idx}`}
                        style={{ marginBottom: 6, gap: 6 }}
                      >
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

          {/* Képek az elkészült PC-ről: „További kép feltöltése” külön mezőkkel */}
          <div
            style={{
              marginTop: 14,
              padding: 12,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            <div className="row" style={{ marginBottom: 8 }}>
              <span className="muted" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 5 }}>
                <Camera size={14} /> Képek az elkészült PC-ről (galériából vagy kamerával)
              </span>
              <button
                type="button"
                className="btn btn-green"
                style={{ padding: "4px 9px", fontSize: 12 }}
                onClick={handleAddBuildPhotoSlot}
              >
                <Plus size={13} /> További kép feltöltése
              </button>
            </div>

            {existingPhotos.length > 0 && (
              <div style={{ marginBottom: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {existingPhotos.map((ph) => (
                  <div key={ph.id} style={{ position: "relative" }}>
                    <img
                      src={ph.url}
                      alt={ph.name}
                      style={{
                        height: 76,
                        width: 104,
                        borderRadius: 6,
                        objectFit: "cover",
                        border: "1px solid var(--border)"
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setExistingPhotos((prev) => prev.filter((item) => item.id !== ph.id))
                      }
                      style={{
                        position: "absolute",
                        top: 3,
                        right: 3,
                        background: "rgba(0,0,0,0.75)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 999,
                        width: 18,
                        height: 18,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        padding: 0
                      }}
                      title="Kép törlése"
                    >
                      <X size={11} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {photoSlots.map((slot) => (
              <div
                key={slot.uid}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8
                }}
              >
                <BuildPhotoSlotPreview file={slot.file} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleBuildPhotoSlotFileChange(slot.uid, e.target.files?.[0] || null)}
                />
                <button
                  type="button"
                  className="btn btn-red"
                  style={{ padding: "5px 7px" }}
                  onClick={() => handleRemoveBuildPhotoSlot(slot.uid)}
                  title="Képmező törlése"
                >
                  <X size={12} />
                </button>
              </div>
            ))}

            {existingPhotos.length === 0 && photoSlots.length === 0 && (
              <div className="muted" style={{ fontSize: 12 }}>
                Kattints a „További kép feltöltése” gombra PC-fotó hozzáadásához.
              </div>
            )}
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
                Kiválasztva:{" "}
                {selectedParts
                  .map((p) => `${p.name} (${Number(p.purchasePrice || 0).toLocaleString("hu-HU")} Ft)`)
                  .join(" • ")}
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
        {(builds || []).map((b) => {
          const items = Array.isArray(b.partsSummary) ? b.partsSummary : [];
          const cost = Number(b.totalCost || 0);
          const sold = b.soldPrice !== null && b.soldPrice !== undefined ? Number(b.soldPrice) : null;
          const isSold = b.status === "Eladva";
          const profit = isSold && sold !== null ? sold - cost : null;
          const buildPhotos = getBuildPhotoList(b);

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
                <div className="row" style={{ marginBottom: 10 }}>
                  <div className="row" style={{ gap: 8 }}>
                    <Cpu size={18} color="#60a5fa" />
                    <strong style={{ fontSize: 16 }}>{b.name}</strong>
                  </div>
                  <span className={`badge ${isSold ? "badge-green" : "badge-blue"}`}>
                    {b.status || "Összerakva"}
                  </span>
                </div>

                {buildPhotos.length > 0 && (
                  <div
                    style={{
                      marginBottom: 10,
                      display: "grid",
                      gridTemplateColumns: buildPhotos.length === 1 ? "1fr" : "repeat(2, 1fr)",
                      gap: 6
                    }}
                  >
                    {buildPhotos.map((ph) => (
                      <a key={ph.id} href={ph.url} target="_blank" rel="noreferrer">
                        <img
                          src={ph.url}
                          alt={ph.name || b.name}
                          style={{
                            width: "100%",
                            height: buildPhotos.length === 1 ? 160 : 100,
                            objectFit: "cover",
                            borderRadius: 8,
                            border: "1px solid var(--border)"
                          }}
                        />
                      </a>
                    ))}
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      isSold && profit !== null ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
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

                {items.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {items.map((item, idx) => (
                      <div
                        key={`${item.id || idx}-${idx}`}
                        className="row"
                        style={{
                          padding: "6px 0",
                          borderBottom:
                            idx < items.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
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
                          <span
                            style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis" }}
                          >
                            {item.name}
                          </span>
                        </div>
                        <span
                          className="muted"
                          style={{
                            fontSize: 13,
                            whiteSpace: "nowrap",
                            fontVariantNumeric: "tabular-nums"
                          }}
                        >
                          {Number(item.purchasePrice || 0).toLocaleString("hu-HU")} Ft
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="row"
                style={{ paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <button className="btn btn-ghost" onClick={() => openEditBuild(b)}>
                  <Pencil size={14} /> Szerkesztés
                </button>
                {!isSold && (
                  <button className="btn btn-green" onClick={() => openSellModal(b)}>
                    Eladás rögzítése
                  </button>
                )}
                <button
                  className="btn btn-red"
                  disabled={deletingBuildId === b.id}
                  onClick={() => setDeleteModalBuild(b)}
                  title="Gép törlése"
                >
                  <Trash2 size={14} /> {deletingBuildId === b.id ? "Törlés..." : "Törlés"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Eladás rögzítése modal */}
      {sellModalBuild && (
        <div
          onClick={() => !sellingInModal && setSellModalBuild(null)}
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
          <form
            className="card"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleConfirmSellModal}
            style={{
              width: "100%",
              maxWidth: 420,
              margin: 0,
              borderRadius: 12,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)"
            }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Gép eladásának rögzítése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setSellModalBuild(null)}
                disabled={sellingInModal}
              >
                <X size={16} />
              </button>
            </div>

            <div className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
              Gép: <strong>{sellModalBuild.name}</strong> • Bekerülés:{" "}
              <strong>{modalCost.toLocaleString("hu-HU")} Ft</strong>
            </div>

            <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
              Eladási ár (Ft)
            </div>
            <input
              type="number"
              min="0"
              value={sellModalPrice}
              onChange={(e) => setSellModalPrice(e.target.value)}
              autoFocus
              required
            />

            {modalPreviewProfit !== null && (
              <div className="row" style={{ marginTop: 10, fontSize: 13 }}>
                <span className="muted">Várható profit:</span>
                <strong className={modalPreviewProfit >= 0 ? "green" : "red"}>
                  {modalPreviewProfit >= 0 ? "+" : ""}
                  {modalPreviewProfit.toLocaleString("hu-HU")} Ft
                </strong>
              </div>
            )}

            {sellModalError && (
              <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
                {sellModalError}
              </div>
            )}

            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSellModalBuild(null)}
                disabled={sellingInModal}
              >
                Mégse
              </button>
              <button type="submit" className="btn btn-green" disabled={sellingInModal}>
                <Check size={15} /> {sellingInModal ? "Mentés..." : "Eladás rögzítése"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Törlés megerősítése modal */}
      {deleteModalBuild && (
        <div
          onClick={() => setDeleteModalBuild(null)}
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
            style={{
              width: "100%",
              maxWidth: 420,
              margin: 0,
              borderRadius: 12,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)"
            }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Gép törlése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setDeleteModalBuild(null)}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Biztosan törlöd ezt a gépet: <strong>{deleteModalBuild.name}</strong>?
              <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
                A beépített alkatrészei automatikusan visszakerülnek a készletbe.
              </div>
            </div>

            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDeleteModalBuild(null)}
              >
                Mégse
              </button>
              <button
                type="button"
                className="btn btn-red"
                onClick={handleConfirmDeleteBuild}
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
