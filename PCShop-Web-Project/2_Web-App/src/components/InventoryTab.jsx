import React, { useEffect, useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  Plus,
  X,
  Trash2,
  FileText,
  Check,
  Pencil,
  FolderPlus,
  RotateCcw,
  Camera,
  Image as ImageIcon
} from "lucide-react";
import { db, storage } from "../firebase";

const DEFAULT_CATEGORIES = [
  "Processzor",
  "Videókártya",
  "Alaplap",
  "Memória",
  "Háttértár",
  "Tápegység",
  "Ház",
  "Hűtő",
  "Egyéb"
];

const STATUSES = ["Készleten", "Beépítve", "Eladva"];

function createPhotoSlot() {
  return {
    uid: `slot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    file: null
  };
}

async function uploadSingleFile(file, folder) {
  if (!file) return { url: null, name: null };
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const sRef = ref(storage, `${folder}/${Date.now()}_${safeName}`);
  await uploadBytes(sRef, file);
  const url = await getDownloadURL(sRef);
  return { url, name: file.name };
}

async function uploadPhotoSlots(slots, folder = "part_photos") {
  const validSlots = (slots || []).filter((s) => s?.file);
  if (validSlots.length === 0) return [];

  return Promise.all(
    validSlots.map(async (slot, idx) => {
      const file = slot.file;
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const storagePath = `${folder}/${Date.now()}_${idx}_${safeName}`;
      const sRef = ref(storage, storagePath);
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

function getPartPhotoList(part) {
  const result = [];
  const seen = new Set();

  if (Array.isArray(part?.photos)) {
    part.photos.forEach((ph, idx) => {
      const url = typeof ph === "string" ? ph : ph?.url;
      if (!url || seen.has(url)) return;
      seen.add(url);
      result.push({
        id: (typeof ph === "object" && ph?.id) || `ph-${idx}-${seen.size}`,
        name: (typeof ph === "object" && ph?.name) || `Kép ${idx + 1}`,
        url
      });
    });
  }

  if (Array.isArray(part?.photoUrls)) {
    part.photoUrls.forEach((url, idx) => {
      if (!url || seen.has(url)) return;
      seen.add(url);
      result.push({
        id: `purl-${idx}-${seen.size}`,
        name: `Kép ${idx + 1}`,
        url
      });
    });
  }

  if (part?.photoFileUrl && !seen.has(part.photoFileUrl)) {
    seen.add(part.photoFileUrl);
    result.push({
      id: "legacy-photo",
      name: part.photoFileName || "Termékkép",
      url: part.photoFileUrl
    });
  }

  return result;
}

function PhotoSlotPreview({ file }) {
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
      alt={file?.name || "Előnézet"}
      style={{
        height: 64,
        width: 84,
        borderRadius: 6,
        objectFit: "cover",
        border: "1px solid var(--border)",
        flexShrink: 0
      }}
    />
  );
}

export default function InventoryTab({ parts = [], userEmail }) {
  const currentEmail = (userEmail || "").toLowerCase();

  const [customCategories, setCustomCategories] = useState([]);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const categories = useMemo(() => {
    const set = new Set(DEFAULT_CATEGORIES);
    (parts || []).forEach((p) => {
      if (p?.category && String(p.category).trim()) {
        set.add(String(p.category).trim());
      }
    });
    customCategories.forEach((c) => {
      if (c && c.trim()) set.add(c.trim());
    });
    return Array.from(set);
  }, [parts, customCategories]);

  // Új alkatrész űrlap
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Videókártya");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [paidWithOwnCard, setPaidWithOwnCard] = useState(false);
  const [invoiceFile, setInvoiceFile] = useState(null);
  const [newFormPhotoSlots, setNewFormPhotoSlots] = useState([createPhotoSlot()]);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Szerkesztés modál állapota
  const [editingPart, setEditingPart] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCategory, setEditCategory] = useState("Videókártya");
  const [editSerialNumber, setEditSerialNumber] = useState("");
  const [editPurchasePrice, setEditPurchasePrice] = useState("");
  const [editStatus, setEditStatus] = useState("Készleten");
  const [editPaidWithOwnCard, setEditPaidWithOwnCard] = useState(false);
  const [editInvoiceFile, setEditInvoiceFile] = useState(null);
  const [removeExistingInvoice, setRemoveExistingInvoice] = useState(false);
  const [editExistingPhotos, setEditExistingPhotos] = useState([]);
  const [editPhotoSlots, setEditPhotoSlots] = useState([]);
  const [editErrorMsg, setEditErrorMsg] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

  // Szűrők és kereső
  const [statusFilter, setStatusFilter] = useState("active");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Eladás, Eladás visszavonása és Törlés modálok
  const [sellTargetPart, setSellTargetPart] = useState(null);
  const [sellPartPrice, setSellPartPrice] = useState("");
  const [sellModalError, setSellModalError] = useState("");
  const [sellingPart, setSellingPart] = useState(false);

  const [revertSaleTargetPart, setRevertSaleTargetPart] = useState(null);
  const [revertingSale, setRevertingSale] = useState(false);

  const [deleteTargetPart, setDeleteTargetPart] = useState(null);
  const [deletingPartId, setDeletingPartId] = useState(null);

  const filteredParts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return (parts || [])
      .filter((p) => {
        const st = p.status || "Készleten";
        if (statusFilter === "active") return st === "Készleten";
        if (statusFilter === "all") return true;
        return st === statusFilter;
      })
      .filter((p) => {
        if (categoryFilter === "all") return true;
        return (p.category || "") === categoryFilter;
      })
      .filter((p) => {
        if (!q) return true;
        return (
          (p.name || "").toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q) ||
          (p.serialNumber || "").toLowerCase().includes(q)
        );
      });
  }, [parts, statusFilter, categoryFilter, search]);

  function handleCreateCategory(targetSetter = null) {
    const clean = newCategoryName.trim();
    if (!clean) return;
    setCustomCategories((prev) => (prev.includes(clean) ? prev : [...prev, clean]));
    if (targetSetter) {
      targetSetter(clean);
    } else {
      setCategory(clean);
    }
    setNewCategoryName("");
    setShowNewCategoryInput(false);
  }

  function resetForm() {
    setName("");
    setCategory(categories[0] || "Videókártya");
    setSerialNumber("");
    setPurchasePrice("");
    setPaidWithOwnCard(false);
    setInvoiceFile(null);
    setNewFormPhotoSlots([createPhotoSlot()]);
    setErrorMsg("");
  }

  function handleAddSlotToNewForm() {
    setNewFormPhotoSlots((prev) => [...prev, createPhotoSlot()]);
  }

  function handleNewFormSlotFileChange(uid, file) {
    setNewFormPhotoSlots((prev) =>
      prev.map((slot) => (slot.uid === uid ? { ...slot, file: file || null } : slot))
    );
  }

  function handleRemoveNewFormSlot(uid) {
    setNewFormPhotoSlots((prev) => {
      const next = prev.filter((slot) => slot.uid !== uid);
      return next.length > 0 ? next : [createPhotoSlot()];
    });
  }

  async function handleAddPart(e) {
    e.preventDefault();
    setErrorMsg("");

    const priceNum = Number(purchasePrice);
    if (!name.trim() || purchasePrice.trim() === "" || Number.isNaN(priceNum) || priceNum < 0) {
      setErrorMsg("Adj meg alkatrésznevet és érvényes beszerzési árat (0 Ft is lehet).");
      return;
    }

    setSaving(true);
    try {
      let invoiceFileUrl = null;
      let invoiceFileName = null;

      if (invoiceFile) {
        const uploadedInv = await uploadSingleFile(invoiceFile, "invoices");
        invoiceFileUrl = uploadedInv.url;
        invoiceFileName = uploadedInv.name;
      }

      const uploadedPhotos = await uploadPhotoSlots(newFormPhotoSlots, "part_photos");
      const photoUrls = uploadedPhotos.map((p) => p.url);

      await addDoc(collection(db, "parts"), {
        name: name.trim(),
        category: category.trim() || "Egyéb",
        serialNumber: serialNumber.trim() || "-",
        purchasePrice: priceNum,
        status: "Készleten",
        buildId: null,
        soldPrice: null,
        soldAt: null,
        paidWithOwnCard: Boolean(paidWithOwnCard),
        paidByEmail: paidWithOwnCard ? currentEmail : null,
        invoiceFileUrl,
        invoiceFileName,
        photos: uploadedPhotos,
        photoUrls,
        photoFileUrl: photoUrls[0] || null,
        photoFileName: uploadedPhotos[0]?.name || null,
        createdByEmail: currentEmail,
        createdAt: Date.now()
      });

      resetForm();
      setShowForm(false);
    } catch (err) {
      console.error("Alkatrész mentési hiba:", err);
      setErrorMsg(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSaving(false);
    }
  }

  function openEditModal(part) {
    setEditingPart(part);
    setEditName(part.name || "");
    setEditCategory(part.category || categories[0] || "Egyéb");
    setEditSerialNumber(part.serialNumber && part.serialNumber !== "-" ? part.serialNumber : "");
    setEditPurchasePrice(
      part.purchasePrice !== undefined && part.purchasePrice !== null ? String(part.purchasePrice) : "0"
    );
    setEditStatus(part.status || "Készleten");
    setEditPaidWithOwnCard(Boolean(part.paidWithOwnCard));
    setEditInvoiceFile(null);
    setRemoveExistingInvoice(false);
    setEditExistingPhotos(getPartPhotoList(part));
    setEditPhotoSlots([]);
    setEditErrorMsg("");
  }

  function handleAddEditPhotoSlot() {
    setEditPhotoSlots((prev) => [...prev, createPhotoSlot()]);
  }

  function handleEditPhotoSlotFileChange(uid, file) {
    setEditPhotoSlots((prev) =>
      prev.map((slot) => (slot.uid === uid ? { ...slot, file: file || null } : slot))
    );
  }

  function handleRemoveEditPhotoSlot(uid) {
    setEditPhotoSlots((prev) => prev.filter((slot) => slot.uid !== uid));
  }

  async function handleConfirmEditPart(e) {
    e.preventDefault();
    if (!editingPart) return;
    setEditErrorMsg("");

    const priceNum = Number(editPurchasePrice);
    if (!editName.trim() || editPurchasePrice.trim() === "" || Number.isNaN(priceNum) || priceNum < 0) {
      setEditErrorMsg("Adj meg érvényes nevet és beszerzési árat (0 Ft is lehet).");
      return;
    }

    setSavingEdit(true);
    try {
      let invoiceFileUrl = removeExistingInvoice ? null : (editingPart.invoiceFileUrl || null);
      let invoiceFileName = removeExistingInvoice ? null : (editingPart.invoiceFileName || null);

      if (editInvoiceFile) {
        const uploadedInv = await uploadSingleFile(editInvoiceFile, "invoices");
        invoiceFileUrl = uploadedInv.url;
        invoiceFileName = uploadedInv.name;
      }

      const newlyUploadedPhotos = await uploadPhotoSlots(editPhotoSlots, "part_photos");
      const seenUrls = new Set();
      const finalPhotos = [...editExistingPhotos, ...newlyUploadedPhotos].filter((ph) => {
        if (!ph?.url || seenUrls.has(ph.url)) return false;
        seenUrls.add(ph.url);
        return true;
      });
      const finalPhotoUrls = finalPhotos.map((ph) => ph.url);

      const nextStatus = STATUSES.includes(editStatus) ? editStatus : "Készleten";

      await updateDoc(doc(db, "parts", editingPart.id), {
        name: editName.trim(),
        category: editCategory.trim() || "Egyéb",
        serialNumber: editSerialNumber.trim() || "-",
        purchasePrice: priceNum,
        status: nextStatus,
        ...(nextStatus === "Készleten" ? { buildId: null, soldAt: null, soldPrice: null } : {}),
        paidWithOwnCard: Boolean(editPaidWithOwnCard),
        paidByEmail: editPaidWithOwnCard ? (editingPart.paidByEmail || currentEmail) : null,
        invoiceFileUrl,
        invoiceFileName,
        photos: finalPhotos,
        photoUrls: finalPhotoUrls,
        photoFileUrl: finalPhotoUrls[0] || null,
        photoFileName: finalPhotos[0]?.name || null,
        updatedAt: Date.now()
      });

      setEditingPart(null);
      setEditInvoiceFile(null);
      setEditPhotoSlots([]);
    } catch (err) {
      console.error("Alkatrész szerkesztési hiba:", err);
      setEditErrorMsg(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingEdit(false);
    }
  }

  function openSellModal(part) {
    setSellTargetPart(part);
    setSellPartPrice(String(part.soldPrice ?? part.purchasePrice ?? 0));
    setSellModalError("");
  }

  async function handleConfirmSellPart(e) {
    e.preventDefault();
    if (!sellTargetPart) return;
    setSellModalError("");

    const numericSoldPrice = Number(sellPartPrice);
    if (sellPartPrice.trim() === "" || Number.isNaN(numericSoldPrice) || numericSoldPrice < 0) {
      setSellModalError("Adj meg érvényes eladási árat (0 Ft is lehet).");
      return;
    }

    setSellingPart(true);
    try {
      await updateDoc(doc(db, "parts", sellTargetPart.id), {
        status: "Eladva",
        soldPrice: numericSoldPrice,
        soldAt: Date.now()
      });
      setSellTargetPart(null);
      setSellPartPrice("");
    } finally {
      setSellingPart(false);
    }
  }

  async function handleConfirmRevertSale() {
    if (!revertSaleTargetPart) return;
    const part = revertSaleTargetPart;
    setRevertSaleTargetPart(null);
    setRevertingSale(true);

    try {
      await updateDoc(doc(db, "parts", part.id), {
        status: "Készleten",
        soldPrice: null,
        soldAt: null,
        buildId: null
      });
    } finally {
      setRevertingSale(false);
    }
  }

  async function handleConfirmDeletePart() {
    if (!deleteTargetPart) return;
    const part = deleteTargetPart;
    setDeleteTargetPart(null);
    setDeletingPartId(part.id);

    try {
      await deleteDoc(doc(db, "parts", part.id));
    } finally {
      setDeletingPartId(null);
    }
  }

  const sellModalCost = Number(sellTargetPart?.purchasePrice || 0);
  const sellModalNumeric = Number(sellPartPrice);
  const sellModalProfit = !Number.isNaN(sellModalNumeric) ? sellModalNumeric - sellModalCost : null;

  const activeEditInvoiceName = editInvoiceFile
    ? editInvoiceFile.name
    : !removeExistingInvoice && editingPart?.invoiceFileUrl
      ? (editingPart.invoiceFileName || "Feltöltött számla")
      : null;

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Készletkövető</h2>
        <button
          className="btn btn-green"
          onClick={() => {
            if (showForm) resetForm();
            setShowForm((v) => !v);
          }}
        >
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? "Bezárás" : "Új alkatrész"}
        </button>
      </div>

      {showForm && (
        <form className="card" onSubmit={handleAddPart} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>Új alkatrész felvétele a készletbe</h3>
          <div className="grid-2">
            <input
              placeholder="Alkatrész neve (pl. RTX 3060 8 GB)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div>
              <div className="row" style={{ marginBottom: 4 }}>
                <span className="muted" style={{ fontSize: 12 }}>Kategória</span>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ padding: "2px 7px", fontSize: 11 }}
                  onClick={() => setShowNewCategoryInput((v) => !v)}
                >
                  <FolderPlus size={12} /> Új kategória
                </button>
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {showNewCategoryInput && (
                <div className="row" style={{ marginTop: 6, gap: 6 }}>
                  <input
                    placeholder="Új kategória neve..."
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-green"
                    style={{ padding: "6px 10px", fontSize: 12 }}
                    onClick={() => handleCreateCategory(setCategory)}
                  >
                    Hozzáad
                  </button>
                </div>
              )}
            </div>
            <input
              placeholder="Sorozatszám (SN, opcionális)"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <input
              type="number"
              min="0"
              placeholder="Beszerzési ár (Ft)"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              required
            />
          </div>

          <div className="grid-2" style={{ marginTop: 10, gap: 10 }}>
            <div
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Számla csatolása (opcionális — PDF vagy kép)
              </div>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => setInvoiceFile(e.target.files?.[0] || null)}
              />
              {invoiceFile && (
                <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>
                  Kiválasztva: {invoiceFile.name}
                </div>
              )}
            </div>

            <div
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <div className="row" style={{ marginBottom: 6 }}>
                <span className="muted" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Camera size={13} /> Termékképek (galériából vagy kamerával)
                </span>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ padding: "2px 8px", fontSize: 11 }}
                  onClick={handleAddSlotToNewForm}
                >
                  <Plus size={12} /> További kép
                </button>
              </div>

              {newFormPhotoSlots.map((slot, idx) => (
                <div
                  key={slot.uid}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: idx < newFormPhotoSlots.length - 1 ? 8 : 0
                  }}
                >
                  <PhotoSlotPreview file={slot.file} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleNewFormSlotFileChange(slot.uid, e.target.files?.[0] || null)}
                  />
                  {newFormPhotoSlots.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-red"
                      style={{ padding: "5px 7px" }}
                      onClick={() => handleRemoveNewFormSlot(slot.uid)}
                      title="Mező törlése"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={paidWithOwnCard}
                onChange={(e) => setPaidWithOwnCard(e.target.checked)}
              />
              <span>Saját kártyával fizetve ({currentEmail})</span>
            </label>
          </div>

          {errorMsg && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {errorMsg}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={saving}>
              {saving ? "Mentés..." : "Felvétel a készletbe"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
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

      {/* Szűrők és kereső */}
      <div className="row" style={{ marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div className="row">
          <button
            className={`btn ${statusFilter === "active" ? "" : "btn-ghost"}`}
            onClick={() => setStatusFilter("active")}
          >
            Aktív készlet
          </button>
          {STATUSES.map((st) => (
            <button
              key={st}
              className={`btn ${statusFilter === st ? "" : "btn-ghost"}`}
              onClick={() => setStatusFilter(st)}
            >
              {st}
            </button>
          ))}
          <button
            className={`btn ${statusFilter === "all" ? "" : "btn-ghost"}`}
            onClick={() => setStatusFilter("all")}
          >
            Összes
          </button>
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ maxWidth: 210 }}
        >
          <option value="all">Minden kategória</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <div style={{ flex: 1, minWidth: 200 }}>
          <input
            placeholder="Keresés név, kategória vagy SN alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredParts.length === 0 ? (
        <div className="card">
          <div className="muted">Nincs a szűrésnek megfelelő alkatrész.</div>
        </div>
      ) : (
        <div className="grid-2">
          {filteredParts.map((part) => {
            const st = part.status || "Készleten";
            const isSold = st === "Eladva";
            const marketPrice = part.topMarketOffers?.[0]?.price;
            const partPhotos = getPartPhotoList(part);

            return (
              <div
                className="card"
                key={part.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 10,
                  borderRadius: 12
                }}
              >
                <div>
                  <div className="row" style={{ marginBottom: 8 }}>
                    <strong style={{ fontSize: 15 }}>{part.name}</strong>
                    <div className="row">
                      {part.category && <span className="badge badge-indigo">{part.category}</span>}
                      <span
                        className={`badge ${
                          isSold
                            ? "badge-green"
                            : st === "Beépítve"
                              ? "badge-purple"
                              : "badge-blue"
                        }`}
                      >
                        {st}
                      </span>
                    </div>
                  </div>

                  {partPhotos.length > 0 && (
                    <div
                      style={{
                        marginBottom: 8,
                        display: "grid",
                        gridTemplateColumns: partPhotos.length === 1 ? "1fr" : "repeat(2, 1fr)",
                        gap: 6
                      }}
                    >
                      {partPhotos.map((ph) => (
                        <a key={ph.id} href={ph.url} target="_blank" rel="noreferrer">
                          <img
                            src={ph.url}
                            alt={ph.name || part.name}
                            style={{
                              width: "100%",
                              height: partPhotos.length === 1 ? 150 : 95,
                              objectFit: "cover",
                              borderRadius: 8,
                              border: "1px solid var(--border)"
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="muted" style={{ fontSize: 12 }}>
                    SN: <strong>{part.serialNumber || "-"}</strong>
                    {part.paidWithOwnCard ? " • Saját kártyás tétel" : ""}
                  </div>

                  <div className="row" style={{ marginTop: 8, fontSize: 13 }}>
                    <span>
                      Beszerzés: <strong>{Number(part.purchasePrice || 0).toLocaleString("hu-HU")} Ft</strong>
                    </span>
                    {isSold && part.soldPrice !== null && part.soldPrice !== undefined ? (
                      <span className="green">
                        Eladva: <strong>{Number(part.soldPrice).toLocaleString("hu-HU")} Ft</strong>
                      </span>
                    ) : marketPrice ? (
                      <span className="muted">
                        Piaci ár: <strong>{Number(marketPrice).toLocaleString("hu-HU")} Ft</strong>
                      </span>
                    ) : null}
                  </div>

                  {part.invoiceFileUrl && (
                    <div style={{ marginTop: 8 }}>
                      <a
                        href={part.invoiceFileUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}
                      >
                        <FileText size={13} /> Számla: {part.invoiceFileName || "Megnyitás"}
                      </a>
                    </div>
                  )}
                </div>

                <div className="row" style={{ paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <button className="btn btn-ghost" onClick={() => openEditModal(part)}>
                    <Pencil size={14} /> Szerkesztés
                  </button>
                  {!isSold && st !== "Beépítve" && (
                    <button className="btn btn-green" onClick={() => openSellModal(part)}>
                      Eladás
                    </button>
                  )}
                  {isSold && (
                    <button
                      className="btn btn-ghost"
                      disabled={revertingSale}
                      onClick={() => setRevertSaleTargetPart(part)}
                    >
                      <RotateCcw size={14} /> Eladás visszavonása
                    </button>
                  )}
                  <button
                    className="btn btn-red"
                    disabled={deletingPartId === part.id}
                    onClick={() => setDeleteTargetPart(part)}
                    title="Törlés"
                  >
                    <Trash2 size={14} /> {deletingPartId === part.id ? "Törlés..." : "Törlés"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Szerkesztés modál */}
      {editingPart && (
        <div
          onClick={() => !savingEdit && setEditingPart(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 1000,
            overflowY: "auto"
          }}
        >
          <form
            className="card"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleConfirmEditPart}
            style={{ width: "100%", maxWidth: 540, margin: "auto", borderRadius: 12 }}
          >
            <div className="row" style={{ marginBottom: 12 }}>
              <h3 style={{ margin: 0 }}>Alkatrész szerkesztése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setEditingPart(null)}
                disabled={savingEdit}
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid-2">
              <input
                placeholder="Alkatrész neve"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                required
              />
              <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input
                placeholder="Sorozatszám (SN)"
                value={editSerialNumber}
                onChange={(e) => setEditSerialNumber(e.target.value)}
              />
              <input
                type="number"
                min="0"
                placeholder="Beszerzési ár (Ft)"
                value={editPurchasePrice}
                onChange={(e) => setEditPurchasePrice(e.target.value)}
                required
              />
              <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                {STATUSES.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <input
                    type="checkbox"
                    style={{ width: "auto" }}
                    checked={editPaidWithOwnCard}
                    onChange={(e) => setEditPaidWithOwnCard(e.target.checked)}
                  />
                  <span style={{ fontSize: 13 }}>Saját kártyás</span>
                </label>
              </div>
            </div>

            {/* Számla kezelése és törlése */}
            <div
              style={{
                marginTop: 12,
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <div className="row" style={{ marginBottom: 6 }}>
                <span className="muted" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <FileText size={13} /> Számla (csere vagy törlés)
                </span>
                {activeEditInvoiceName && (
                  <button
                    type="button"
                    className="btn btn-red"
                    style={{ padding: "3px 8px", fontSize: 11 }}
                    onClick={() => {
                      setEditInvoiceFile(null);
                      setRemoveExistingInvoice(true);
                    }}
                  >
                    <Trash2 size={12} /> Számla törlése
                  </button>
                )}
              </div>

              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0] || null;
                  setEditInvoiceFile(f);
                  if (f) setRemoveExistingInvoice(false);
                }}
              />

              {activeEditInvoiceName ? (
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Aktuális számla: <strong>{activeEditInvoiceName}</strong>
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Nincs csatolt számla.
                </div>
              )}
            </div>

            {/* Termékképek: meglévők + „További kép feltöltése” gomb külön mezőkkel */}
            <div
              style={{
                marginTop: 10,
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <div className="row" style={{ marginBottom: 8 }}>
                <span className="muted" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <ImageIcon size={13} /> Termékképek (galériából vagy kamerával)
                </span>
                <button
                  type="button"
                  className="btn btn-green"
                  style={{ padding: "4px 9px", fontSize: 12 }}
                  onClick={handleAddEditPhotoSlot}
                >
                  <Plus size={13} /> További kép feltöltése
                </button>
              </div>

              {editExistingPhotos.length > 0 && (
                <div style={{ marginBottom: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {editExistingPhotos.map((ph) => (
                    <div key={ph.id} style={{ position: "relative" }}>
                      <img
                        src={ph.url}
                        alt={ph.name}
                        style={{
                          height: 72,
                          width: 92,
                          borderRadius: 6,
                          objectFit: "cover",
                          border: "1px solid var(--border)"
                        }}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setEditExistingPhotos((prev) => prev.filter((item) => item.id !== ph.id))
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

              {editPhotoSlots.map((slot) => (
                <div
                  key={slot.uid}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8
                  }}
                >
                  <PhotoSlotPreview file={slot.file} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleEditPhotoSlotFileChange(slot.uid, e.target.files?.[0] || null)}
                  />
                  <button
                    type="button"
                    className="btn btn-red"
                    style={{ padding: "5px 7px" }}
                    onClick={() => handleRemoveEditPhotoSlot(slot.uid)}
                    title="Képmező törlése"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {editExistingPhotos.length === 0 && editPhotoSlots.length === 0 && (
                <div className="muted" style={{ fontSize: 12 }}>
                  Kattints a „További kép feltöltése” gombra új kép hozzáadásához a galériából vagy kamerával.
                </div>
              )}
            </div>

            {editErrorMsg && (
              <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
                {editErrorMsg}
              </div>
            )}

            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setEditingPart(null)}
                disabled={savingEdit}
              >
                Mégse
              </button>
              <button type="submit" className="btn btn-green" disabled={savingEdit}>
                <Check size={15} /> {savingEdit ? "Mentés..." : "Mentés"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Eladás modál */}
      {sellTargetPart && (
        <div
          onClick={() => !sellingPart && setSellTargetPart(null)}
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
            onSubmit={handleConfirmSellPart}
            style={{ width: "100%", maxWidth: 420, margin: 0, borderRadius: 12 }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Alkatrész eladásának rögzítése</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setSellTargetPart(null)}
                disabled={sellingPart}
              >
                <X size={16} />
              </button>
            </div>

            <div className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
              <strong>{sellTargetPart.name}</strong> • Beszerzés:{" "}
              <strong>{sellModalCost.toLocaleString("hu-HU")} Ft</strong>
            </div>

            <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
              Eladási ár (Ft)
            </div>
            <input
              type="number"
              min="0"
              value={sellPartPrice}
              onChange={(e) => setSellPartPrice(e.target.value)}
              autoFocus
              required
            />

            {sellModalProfit !== null && (
              <div className="row" style={{ marginTop: 10, fontSize: 13 }}>
                <span className="muted">Várható profit:</span>
                <strong className={sellModalProfit >= 0 ? "green" : "red"}>
                  {sellModalProfit >= 0 ? "+" : ""}
                  {sellModalProfit.toLocaleString("hu-HU")} Ft
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
                onClick={() => setSellTargetPart(null)}
                disabled={sellingPart}
              >
                Mégse
              </button>
              <button type="submit" className="btn btn-green" disabled={sellingPart}>
                <Check size={15} /> {sellingPart ? "Mentés..." : "Eladás mentése"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Eladás visszavonása modál */}
      {revertSaleTargetPart && (
        <div
          onClick={() => !revertingSale && setRevertSaleTargetPart(null)}
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
              <h3 style={{ margin: 0 }}>Eladás visszavonása</h3>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setRevertSaleTargetPart(null)}
                disabled={revertingSale}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Visszavonod az eladást: <strong>{revertSaleTargetPart.name}</strong>?
              <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
                Az alkatrész újra <strong>Készleten</strong> státuszba kerül, és kikerül az eladások közül.
              </div>
            </div>

            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setRevertSaleTargetPart(null)}
                disabled={revertingSale}
              >
                Mégse
              </button>
              <button
                type="button"
                className="btn btn-green"
                disabled={revertingSale}
                onClick={handleConfirmRevertSale}
              >
                <RotateCcw size={14} /> {revertingSale ? "Visszavonás..." : "Visszavonás"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Törlés megerősítő modál */}
      {deleteTargetPart && (
        <div
          onClick={() => setDeleteTargetPart(null)}
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
              <h3 style={{ margin: 0 }}>Alkatrész törlése</h3>
              <button className="btn btn-ghost" style={{ padding: 6 }} onClick={() => setDeleteTargetPart(null)}>
                <X size={16} />
              </button>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Biztosan törlöd a készletből: <strong>{deleteTargetPart.name}</strong>?
            </div>

            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button className="btn btn-ghost" onClick={() => setDeleteTargetPart(null)}>
                Mégse
              </button>
              <button className="btn btn-red" onClick={handleConfirmDeletePart}>
                <Trash2 size={14} /> Igen, törlöm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
