import React, { useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  Plus,
  X,
  ShieldCheck,
  Clock,
  AlertTriangle,
  Trash2,
  Pencil,
  FileText,
  MessageSquareWarning,
  Monitor,
  User
} from "lucide-react";
import { db, storage } from "../firebase";

const CATEGORIES = [
  "Processzor",
  "Videókártya",
  "Alaplap",
  "Memória",
  "Háttértár",
  "Tápegység",
  "Ház",
  "Hűtő",
  "Gép",
  "Egyéb"
];

const DEFAULT_PC_SLOTS = [
  "Processzor",
  "Videókártya",
  "Alaplap",
  "Memória",
  "Háttértár",
  "Tápegység",
  "Ház",
  "Hűtő"
];

const RESOLUTIONS = [
  "Csere másikra",
  "Javítva",
  "Visszatérítve / jóváírva",
  "Folyamatban",
  "Elutasítva"
];

function addOneMonth(timestamp) {
  const d = new Date(Number(timestamp || Date.now()));
  const targetMonth = d.getMonth() + 1;
  const targetYear = d.getFullYear() + Math.floor(targetMonth / 12);
  const normalizedMonth = ((targetMonth % 12) + 12) % 12;
  const maxDayInTargetMonth = new Date(targetYear, normalizedMonth + 1, 0).getDate();
  const safeDay = Math.min(d.getDate(), maxDayInTargetMonth);
  const exp = new Date(d.getTime());
  exp.setFullYear(targetYear, normalizedMonth, safeDay);
  return exp.getTime();
}

function formatDateHu(ts) {
  if (!ts) return "-";
  return new Date(Number(ts)).toLocaleDateString("hu-HU");
}

function toDateInputValue(ts) {
  const d = new Date(Number(ts || Date.now()));
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function createDefaultPcComponents() {
  return DEFAULT_PC_SLOTS.map((cat) => ({
    name: "",
    category: cat,
    serialNumber: ""
  }));
}

async function uploadInvoicesBatch(fileList, prefix = "warranty") {
  const files = Array.from(fileList || []);
  if (files.length === 0) return [];

  const uploaded = await Promise.all(
    files.map(async (file, idx) => {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const storagePath = `warranty_invoices/${prefix}_${Date.now()}_${idx}_${safeName}`;
      const sRef = ref(storage, storagePath);
      await uploadBytes(sRef, file);
      const url = await getDownloadURL(sRef);
      return {
        id: `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 7)}`,
        label: file.name,
        url
      };
    })
  );

  return uploaded;
}

function mergeUniqueInvoices(...lists) {
  const result = [];
  const seenUrls = new Set();

  lists.forEach((list) => {
    (Array.isArray(list) ? list : []).forEach((item, idx) => {
      if (!item?.url || seenUrls.has(item.url)) return;
      seenUrls.add(item.url);
      result.push({
        id: item.id || `inv-${idx}-${seenUrls.size}`,
        label: item.label || item.name || "Számla",
        url: item.url
      });
    });
  });

  return result;
}

export default function WarrantyTab({
  parts = [],
  builds = [],
  warrantyItems = [],
  warrantyComplaints = [],
  userEmail
}) {
  const [filterStatus, setFilterStatus] = useState("active"); // "active" | "expired" | "all"
  const [search, setSearch] = useState("");

  // Egyedi garanciális tétel űrlap
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [name, setName] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [category, setCategory] = useState("Videókártya");
  const [serialNumber, setSerialNumber] = useState("");
  const [soldDateStr, setSoldDateStr] = useState(toDateInputValue(Date.now()));
  const [note, setNote] = useState("");
  const [itemExistingInvoices, setItemExistingInvoices] = useState([]);
  const [itemInvoiceFiles, setItemInvoiceFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Teljes gép (alkatrészenként SN-ekkel + vevő nevével + gyűjtő számlákkal) garanciába űrlap
  const [showPcForm, setShowPcForm] = useState(false);
  const [editingPcDocId, setEditingPcDocId] = useState(null);
  const [pcName, setPcName] = useState("");
  const [pcBuyerName, setPcBuyerName] = useState("");
  const [pcSoldDateStr, setPcSoldDateStr] = useState(toDateInputValue(Date.now()));
  const [pcNote, setPcNote] = useState("");
  const [pcComponents, setPcComponents] = useState(createDefaultPcComponents());
  const [pcExistingInvoices, setPcExistingInvoices] = useState([]);
  const [pcInvoiceFiles, setPcInvoiceFiles] = useState([]);
  const [savingPc, setSavingPc] = useState(false);
  const [pcErrorMsg, setPcErrorMsg] = useState("");

  // Panasz felvétele űrlap + cserealkatrész frissítés
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintTargetEntry, setComplaintTargetEntry] = useState(null);
  const [selectedPartOption, setSelectedPartOption] = useState("");
  const [selectedBuildComponentIndex, setSelectedBuildComponentIndex] = useState("");
  const [complaintPartName, setComplaintPartName] = useState("");
  const [complaintSn, setComplaintSn] = useState("");
  const [complaintResolutionType, setComplaintResolutionType] = useState("Csere másikra");
  const [complaintSolutionDetail, setComplaintSolutionDetail] = useState("");
  const [complaintCost, setComplaintCost] = useState("0");

  // Csere esetén az új alkatrész adatai a garancia táblához
  const [replaceInWarranty, setReplaceInWarranty] = useState(true);
  const [replacementName, setReplacementName] = useState("");
  const [replacementSn, setReplacementSn] = useState("");
  const [replacementInvoiceFile, setReplacementInvoiceFile] = useState(null);

  const [savingComplaint, setSavingComplaint] = useState(false);
  const [complaintError, setComplaintError] = useState("");

  const now = Date.now();

  const combinedEntries = useMemo(() => {
    const manualBySourceKey = new Map();
    const pureManuals = [];

    (warrantyItems || []).forEach((item) => {
      if (item.sourceKey) {
        manualBySourceKey.set(item.sourceKey, item);
      } else if (!item.hidden) {
        pureManuals.push(item);
      }
    });

    const partById = new Map((parts || []).map((p) => [p.id, p]));
    const soldBuilds = (builds || []).filter((b) => b.status === "Eladva");
    const entries = [];

    soldBuilds.forEach((build) => {
      const buildSoldAt = build.soldAt || build.createdAt || now;
      const buildSourceKey = `build-${build.id}`;
      const overrideBuild = manualBySourceKey.get(buildSourceKey);

      const bSoldAt = overrideBuild?.soldAt || buildSoldAt;
      const bExpiresAt = addOneMonth(bSoldAt);

      const rawIds = Array.isArray(build.partIds)
        ? build.partIds
        : Array.isArray(build.parts)
          ? build.parts.map((p) => (typeof p === "string" ? p : p?.id)).filter(Boolean)
          : [];

      const summaryList = Array.isArray(build.partsSummary) ? build.partsSummary : [];
      const summaryById = new Map(summaryList.map((s) => [s.id, s]));

      const allComponentIds = Array.from(
        new Set([...rawIds, ...summaryList.map((s) => s.id).filter(Boolean)])
      );

      let componentRows = [];

      if (Array.isArray(overrideBuild?.components) && overrideBuild.components.length > 0) {
        componentRows = overrideBuild.components.map((c, idx) => ({
          id: c.id || `${build.id}-ov-${idx}`,
          name: c.name || "Alkatrész",
          category: c.category || "",
          serialNumber: c.serialNumber || "-",
          invoiceFileUrl: c.invoiceFileUrl || null
        }));
      } else {
        allComponentIds.forEach((pid) => {
          const livePart = partById.get(pid);
          const sumPart = summaryById.get(pid);
          const pName = livePart?.name || sumPart?.name;
          const pSn = livePart?.serialNumber || sumPart?.serialNumber || "-";
          const pCat = livePart?.category || sumPart?.category || "";
          const invUrl = livePart?.invoiceFileUrl || sumPart?.invoiceFileUrl || null;
          if (pName) {
            componentRows.push({
              id: pid,
              name: pName,
              category: pCat,
              serialNumber: pSn,
              invoiceFileUrl: invUrl
            });
          }
        });
      }

      const partInvoices = [];
      allComponentIds.forEach((pid) => {
        const livePart = partById.get(pid);
        const sumPart = summaryById.get(pid);
        const invUrl = livePart?.invoiceFileUrl || sumPart?.invoiceFileUrl;
        if (invUrl) {
          partInvoices.push({
            id: pid,
            label: livePart?.name || sumPart?.name || "Alkatrész számla",
            url: invUrl
          });
        }
      });

      const compInvoices = componentRows
        .filter((c) => c.invoiceFileUrl)
        .map((c, idx) => ({
          id: c.id || `comp-inv-${idx}`,
          label: c.name || "Alkatrész számla",
          url: c.invoiceFileUrl
        }));

      const overrideInvoices = Array.isArray(overrideBuild?.invoices) ? overrideBuild.invoices : [];
      const invoiceLinks = mergeUniqueInvoices(overrideInvoices, partInvoices, compInvoices);

      const fallbackSummaryText =
        componentRows.length > 0
          ? componentRows.map((c) => `${c.name} (${c.serialNumber})`).join(" • ")
          : "Gép csomag";

      entries.push({
        id: overrideBuild?.id || buildSourceKey,
        sourceKey: buildSourceKey,
        isAutoBuild: true,
        isManualPc: false,
        name: overrideBuild?.name || `[Gép] ${build.name || "Névtelen gép"}`,
        buyerName: overrideBuild?.buyerName || build.buyerName || "",
        category: overrideBuild?.category || "Gép",
        serialNumber: overrideBuild?.serialNumber || fallbackSummaryText,
        componentRows,
        soldAt: bSoldAt,
        expiresAt: bExpiresAt,
        note: overrideBuild?.note || "",
        invoices: invoiceLinks,
        rawOverrideDoc: overrideBuild || null
      });
    });

    pureManuals.forEach((m) => {
      const mSoldAt = m.soldAt || m.createdAt || now;
      const isManualPc = m.type === "pc_build" || Array.isArray(m.components);
      const compRows = isManualPc
        ? (m.components || []).map((c, idx) => ({
            id: c.id || `${m.id}-comp-${idx}`,
            name: c.name || "Alkatrész",
            category: c.category || "",
            serialNumber: c.serialNumber || "-",
            invoiceFileUrl: c.invoiceFileUrl || null
          }))
        : [];

      const batchInvoices = Array.isArray(m.invoices) ? m.invoices : [];
      const singleInvoice = m.invoiceFileUrl ? [{ id: m.id, label: m.name, url: m.invoiceFileUrl }] : [];
      const compInvoices = compRows
        .filter((c) => c.invoiceFileUrl)
        .map((c, idx) => ({
          id: c.id || `m-comp-${idx}`,
          label: c.name,
          url: c.invoiceFileUrl
        }));

      const invList = mergeUniqueInvoices(batchInvoices, singleInvoice, compInvoices);

      const summarySnText =
        compRows.length > 0
          ? compRows.map((c) => `${c.name} (${c.serialNumber})`).join(" • ")
          : (m.serialNumber || "-");

      entries.push({
        id: m.id,
        sourceKey: null,
        isAutoBuild: false,
        isManualPc,
        name: m.name || "Névtelen tétel",
        buyerName: m.buyerName || "",
        category: m.category || (isManualPc ? "Gép" : "Egyéb"),
        serialNumber: summarySnText,
        componentRows: compRows,
        soldAt: mSoldAt,
        expiresAt: addOneMonth(mSoldAt),
        note: m.note || "",
        invoices: invList,
        rawOverrideDoc: m
      });
    });

    return entries
      .map((e) => {
        const isExpired = now > e.expiresAt;
        const daysLeft = Math.ceil((e.expiresAt - now) / (1000 * 60 * 60 * 24));
        return { ...e, isExpired, daysLeft };
      })
      .sort((a, b) => a.expiresAt - b.expiresAt);
  }, [parts, builds, warrantyItems, now]);

  const selectableParts = useMemo(() => {
    const map = new Map();

    combinedEntries.forEach((entry) => {
      (entry.componentRows || []).forEach((c, idx) => {
        const sn = c.serialNumber && c.serialNumber !== "Nincs" && c.serialNumber !== "Úton" ? c.serialNumber : "-";
        const key = `entry:${entry.id}:comp:${idx}`;
        if (!map.has(key)) {
          map.set(key, {
            key,
            entry,
            compIndex: idx,
            name: c.name,
            serialNumber: sn,
            label: `${c.category ? `[${c.category}] ` : ""}${c.name} — SN: ${sn} (${entry.name})`
          });
        }
      });
      if (!entry.isAutoBuild && !entry.isManualPc && entry.name) {
        const sn = entry.serialNumber && entry.serialNumber !== "-" ? entry.serialNumber : "-";
        const key = `entry:${entry.id}:single`;
        if (!map.has(key)) {
          map.set(key, {
            key,
            entry,
            compIndex: null,
            name: entry.name,
            serialNumber: sn,
            label: `${entry.category ? `[${entry.category}] ` : ""}${entry.name} — SN: ${sn}`
          });
        }
      }
    });

    (parts || []).forEach((p, idx) => {
      if (!p?.name) return;
      const sn = p.serialNumber && p.serialNumber !== "Nincs" && p.serialNumber !== "Úton" ? p.serialNumber : "-";
      const key = `part:${p.id || idx}`;
      if (!map.has(key)) {
        map.set(key, {
          key,
          entry: null,
          compIndex: null,
          name: p.name,
          serialNumber: sn,
          label: `${p.category ? `[${p.category}] ` : ""}${p.name} — SN: ${sn}${p.status ? ` (${p.status})` : ""}`
        });
      }
    });

    return Array.from(map.values());
  }, [parts, combinedEntries]);

  const activeCount = combinedEntries.filter((e) => !e.isExpired).length;
  const expiredCount = combinedEntries.filter((e) => e.isExpired).length;

  const filteredEntries = useMemo(() => {
    const q = search.trim().toLowerCase();
    return combinedEntries
      .filter((e) => {
        if (filterStatus === "active") return !e.isExpired;
        if (filterStatus === "expired") return e.isExpired;
        return true;
      })
      .filter((e) => {
        if (!q) return true;
        return (
          (e.name || "").toLowerCase().includes(q) ||
          (e.buyerName || "").toLowerCase().includes(q) ||
          (e.serialNumber || "").toLowerCase().includes(q) ||
          (e.category || "").toLowerCase().includes(q) ||
          (e.note || "").toLowerCase().includes(q)
        );
      });
  }, [combinedEntries, filterStatus, search]);

  const totalComplaintCost = useMemo(
    () => (warrantyComplaints || []).reduce((sum, c) => sum + Number(c.cost || 0), 0),
    [warrantyComplaints]
  );

  function closeAllForms() {
    setShowForm(false);
    setShowPcForm(false);
    setShowComplaintForm(false);
  }

  function resetForm() {
    setEditingItem(null);
    setName("");
    setBuyerName("");
    setCategory("Videókártya");
    setSerialNumber("");
    setSoldDateStr(toDateInputValue(Date.now()));
    setNote("");
    setItemExistingInvoices([]);
    setItemInvoiceFiles([]);
    setErrorMsg("");
  }

  function resetPcForm() {
    setEditingPcDocId(null);
    setPcName("");
    setPcBuyerName("");
    setPcSoldDateStr(toDateInputValue(Date.now()));
    setPcNote("");
    setPcComponents(createDefaultPcComponents());
    setPcExistingInvoices([]);
    setPcInvoiceFiles([]);
    setPcErrorMsg("");
  }

  function openNewForm() {
    resetForm();
    closeAllForms();
    setShowForm(true);
  }

  function openNewPcForm() {
    resetPcForm();
    closeAllForms();
    setShowPcForm(true);
  }

  function openEditForm(entry) {
    closeAllForms();
    if (entry.isManualPc && entry.rawOverrideDoc?.id) {
      setEditingPcDocId(entry.rawOverrideDoc.id);
      const rawTitle = (entry.name || "").replace(/^\[Gép\]\s*/i, "");
      setPcName(rawTitle);
      setPcBuyerName(entry.buyerName || "");
      setPcSoldDateStr(toDateInputValue(entry.soldAt || Date.now()));
      setPcNote(entry.note || "");
      const existingComps = (entry.componentRows || []).map((c) => ({
        id: c.id,
        name: c.name || "",
        category: c.category || "",
        serialNumber: c.serialNumber === "-" ? "" : (c.serialNumber || ""),
        invoiceFileUrl: c.invoiceFileUrl || null
      }));
      setPcComponents(existingComps.length > 0 ? existingComps : createDefaultPcComponents());
      setPcExistingInvoices(mergeUniqueInvoices(entry.rawOverrideDoc?.invoices, entry.invoices));
      setPcInvoiceFiles([]);
      setPcErrorMsg("");
      setShowPcForm(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setEditingItem(entry);
    setName(entry.name || "");
    setBuyerName(entry.buyerName || "");
    setCategory(CATEGORIES.includes(entry.category) ? entry.category : "Egyéb");
    setSerialNumber(entry.serialNumber === "-" ? "" : (entry.serialNumber || ""));
    setSoldDateStr(toDateInputValue(entry.soldAt || Date.now()));
    setNote(entry.note || "");
    setItemExistingInvoices(mergeUniqueInvoices(entry.rawOverrideDoc?.invoices, entry.invoices));
    setItemInvoiceFiles([]);
    setErrorMsg("");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openComplaintForm(prefillEntry = null) {
    setComplaintError("");
    setComplaintTargetEntry(prefillEntry || null);

    const hasCompRows = Array.isArray(prefillEntry?.componentRows) && prefillEntry.componentRows.length > 0;
    if (hasCompRows) {
      setSelectedPartOption("");
      setSelectedBuildComponentIndex("0");
      const firstComp = prefillEntry.componentRows[0];
      setComplaintPartName(firstComp.name || "");
      setComplaintSn(firstComp.serialNumber || "-");
    } else if (prefillEntry && !prefillEntry.isAutoBuild && !prefillEntry.isManualPc) {
      setSelectedPartOption("");
      setSelectedBuildComponentIndex("");
      setComplaintPartName(prefillEntry.name || "");
      setComplaintSn(prefillEntry.serialNumber || "-");
    } else {
      const firstGlobal = selectableParts[0];
      setSelectedPartOption(firstGlobal ? firstGlobal.key : "");
      setSelectedBuildComponentIndex("");
      setComplaintPartName(firstGlobal ? firstGlobal.name : "");
      setComplaintSn(firstGlobal ? firstGlobal.serialNumber : "-");
    }

    setComplaintResolutionType("Csere másikra");
    setComplaintSolutionDetail("");
    setComplaintCost("0");
    setReplaceInWarranty(true);
    setReplacementName("");
    setReplacementSn("");
    setReplacementInvoiceFile(null);

    closeAllForms();
    setShowComplaintForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBuildComponentSelect(idxStr) {
    setSelectedBuildComponentIndex(idxStr);
    const idx = Number(idxStr);
    const comp = complaintTargetEntry?.componentRows?.[idx];
    if (!comp) return;
    setComplaintPartName(comp.name || "");
    setComplaintSn(comp.serialNumber || "-");
  }

  function handleSelectPartChange(key) {
    setSelectedPartOption(key);
    if (!key) return;
    const found = selectableParts.find((sp) => sp.key === key);
    if (found) {
      if (found.entry) {
        setComplaintTargetEntry(found.entry);
      }
      setComplaintPartName(found.name);
      setComplaintSn(found.serialNumber || "-");
    }
  }

  function handlePcComponentChange(idx, field, value) {
    setPcComponents((prev) =>
      prev.map((row, i) => (i === idx ? { ...row, [field]: value } : row))
    );
  }

  function addPcComponentRow() {
    setPcComponents((prev) => [...prev, { name: "", category: "", serialNumber: "" }]);
  }

  function removePcComponentRow(idx) {
    setPcComponents((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      return next.length > 0 ? next : [{ name: "", category: "", serialNumber: "" }];
    });
  }

  async function handleSavePc(e) {
    e.preventDefault();
    setPcErrorMsg("");

    const validComponents = pcComponents
      .filter((c) => c.name.trim() !== "")
      .map((c) => ({
        name: c.name.trim(),
        category: c.category.trim(),
        serialNumber: c.serialNumber.trim() || "-",
        invoiceFileUrl: c.invoiceFileUrl || null
      }));

    if (!pcName.trim()) {
      setPcErrorMsg("Add meg a gép nevét.");
      return;
    }
    if (validComponents.length === 0) {
      setPcErrorMsg("Töltsd ki legalább egy alkatrész nevét a géphez.");
      return;
    }

    const parsedDate = new Date(`${pcSoldDateStr}T12:00:00`).getTime();
    const soldAtTs = Number.isNaN(parsedDate) ? Date.now() : parsedDate;

    setSavingPc(true);
    try {
      const newlyUploaded = await uploadInvoicesBatch(pcInvoiceFiles, "pc_warranty");
      const finalInvoices = mergeUniqueInvoices(pcExistingInvoices, newlyUploaded);

      const displayName = pcName.trim().startsWith("[Gép]") ? pcName.trim() : `[Gép] ${pcName.trim()}`;
      const payload = {
        type: "pc_build",
        name: displayName,
        buyerName: pcBuyerName.trim(),
        category: "Gép",
        components: validComponents,
        serialNumber: validComponents.map((c) => `${c.name} (${c.serialNumber})`).join(" • "),
        invoices: finalInvoices,
        invoiceFileUrl: finalInvoices[0]?.url || null,
        soldAt: soldAtTs,
        expiresAt: addOneMonth(soldAtTs),
        note: pcNote.trim(),
        hidden: false
      };

      if (editingPcDocId) {
        await updateDoc(doc(db, "warranty_items", editingPcDocId), {
          ...payload,
          updatedAt: Date.now()
        });
      } else {
        await addDoc(collection(db, "warranty_items"), {
          ...payload,
          createdByEmail: (userEmail || "").toLowerCase(),
          createdAt: Date.now()
        });
      }

      resetPcForm();
      setShowPcForm(false);
    } catch (err) {
      console.error("Teljes gép garancia mentési hiba:", err);
      setPcErrorMsg(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingPc(false);
    }
  }

  async function handleSave(e) {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim()) {
      setErrorMsg("Add meg az alkatrész / tétel nevét.");
      return;
    }

    const parsedDate = new Date(`${soldDateStr}T12:00:00`).getTime();
    const soldAtTs = Number.isNaN(parsedDate) ? Date.now() : parsedDate;

    setSaving(true);
    try {
      const newlyUploaded = await uploadInvoicesBatch(itemInvoiceFiles, "item_warranty");
      const finalInvoices = mergeUniqueInvoices(itemExistingInvoices, newlyUploaded);

      const payload = {
        name: name.trim(),
        buyerName: buyerName.trim(),
        category,
        serialNumber: serialNumber.trim() || "-",
        invoices: finalInvoices,
        invoiceFileUrl: finalInvoices[0]?.url || null,
        soldAt: soldAtTs,
        expiresAt: addOneMonth(soldAtTs),
        note: note.trim(),
        hidden: false
      };

      if (editingItem?.isAutoBuild && editingItem?.sourceKey) {
        const docId = editingItem.rawOverrideDoc?.id || editingItem.sourceKey;
        await setDoc(
          doc(db, "warranty_items", docId),
          {
            ...payload,
            sourceKey: editingItem.sourceKey,
            createdByEmail: editingItem.rawOverrideDoc?.createdByEmail || (userEmail || "").toLowerCase(),
            updatedAt: Date.now()
          },
          { merge: true }
        );
      } else if (editingItem?.rawOverrideDoc?.id) {
        await updateDoc(doc(db, "warranty_items", editingItem.rawOverrideDoc.id), {
          ...payload,
          updatedAt: Date.now()
        });
      } else {
        await addDoc(collection(db, "warranty_items"), {
          ...payload,
          createdByEmail: (userEmail || "").toLowerCase(),
          createdAt: Date.now()
        });
      }

      resetForm();
      setShowForm(false);
    } catch (err) {
      console.error("Garancia mentési hiba:", err);
      setErrorMsg(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(entry) {
    if (entry.isAutoBuild) return;
    if (!confirm(`Törlöd a garancia listából: ${entry.name}?`)) return;

    if (entry.rawOverrideDoc?.id) {
      await deleteDoc(doc(db, "warranty_items", entry.rawOverrideDoc.id));
    }

    if (editingItem?.id === entry.id || editingPcDocId === entry.id) {
      resetForm();
      resetPcForm();
      closeAllForms();
    }
  }

  async function handleSaveComplaint(e) {
    e.preventDefault();
    setComplaintError("");
    if (!complaintPartName.trim()) {
      setComplaintError("Válaszd ki a legördülő menüből a garanciáztatott alkatrészt.");
      return;
    }
    const numericCost = complaintCost.trim() === "" ? 0 : Number(complaintCost);
    if (Number.isNaN(numericCost) || numericCost < 0) {
      setComplaintError("A költség nem lehet negatív.");
      return;
    }

    const isSwap = complaintResolutionType === "Csere másikra" && replaceInWarranty;
    if (isSwap && !replacementName.trim()) {
      setComplaintError("Add meg az új cserealkatrész nevét.");
      return;
    }

    setSavingComplaint(true);
    try {
      let newInvoiceUrl = null;
      if (replacementInvoiceFile) {
        const uploadedSingle = await uploadInvoicesBatch([replacementInvoiceFile], "replacement_invoice");
        newInvoiceUrl = uploadedSingle[0]?.url || null;
      }

      if (isSwap && complaintTargetEntry) {
        const finalNewName = replacementName.trim();
        const finalNewSn = replacementSn.trim() || "-";

        if (complaintTargetEntry.componentRows && complaintTargetEntry.componentRows.length > 0) {
          const targetIdx =
            selectedBuildComponentIndex !== "" && !Number.isNaN(Number(selectedBuildComponentIndex))
              ? Number(selectedBuildComponentIndex)
              : complaintTargetEntry.componentRows.findIndex(
                  (c) => (c.name || "").toLowerCase() === complaintPartName.trim().toLowerCase()
                );

          const updatedComponents = complaintTargetEntry.componentRows.map((c, idx) => {
            if (idx === targetIdx) {
              return {
                id: c.id,
                name: finalNewName,
                category: c.category || "",
                serialNumber: finalNewSn,
                invoiceFileUrl: newInvoiceUrl || c.invoiceFileUrl || null
              };
            }
            return {
              id: c.id,
              name: c.name,
              category: c.category || "",
              serialNumber: c.serialNumber || "-",
              invoiceFileUrl: c.invoiceFileUrl || null
            };
          });

          const newSummaryText = updatedComponents
            .map((c) => `${c.name} (${c.serialNumber})`)
            .join(" • ");

          const nextInvoices = mergeUniqueInvoices(
            complaintTargetEntry.invoices,
            newInvoiceUrl ? [{ id: `rep-${Date.now()}`, label: finalNewName, url: newInvoiceUrl }] : []
          );

          if (complaintTargetEntry.isAutoBuild && complaintTargetEntry.sourceKey) {
            const docId = complaintTargetEntry.rawOverrideDoc?.id || complaintTargetEntry.sourceKey;
            await setDoc(
              doc(db, "warranty_items", docId),
              {
                sourceKey: complaintTargetEntry.sourceKey,
                name: complaintTargetEntry.name,
                buyerName: complaintTargetEntry.buyerName || "",
                category: complaintTargetEntry.category || "Gép",
                components: updatedComponents,
                serialNumber: newSummaryText,
                invoices: nextInvoices,
                soldAt: complaintTargetEntry.soldAt,
                expiresAt: complaintTargetEntry.expiresAt,
                note: complaintTargetEntry.note || "",
                hidden: false,
                createdByEmail:
                  complaintTargetEntry.rawOverrideDoc?.createdByEmail || (userEmail || "").toLowerCase(),
                updatedAt: Date.now()
              },
              { merge: true }
            );
          } else if (complaintTargetEntry.rawOverrideDoc?.id) {
            await updateDoc(doc(db, "warranty_items", complaintTargetEntry.rawOverrideDoc.id), {
              components: updatedComponents,
              serialNumber: newSummaryText,
              invoices: nextInvoices,
              updatedAt: Date.now()
            });
          }
        } else if (!complaintTargetEntry.isAutoBuild && complaintTargetEntry.rawOverrideDoc?.id) {
          const nextInvoices = mergeUniqueInvoices(
            complaintTargetEntry.invoices,
            newInvoiceUrl ? [{ id: `rep-${Date.now()}`, label: finalNewName, url: newInvoiceUrl }] : []
          );
          await updateDoc(doc(db, "warranty_items", complaintTargetEntry.rawOverrideDoc.id), {
            name: finalNewName,
            serialNumber: finalNewSn,
            invoices: nextInvoices,
            ...(newInvoiceUrl ? { invoiceFileUrl: newInvoiceUrl } : {}),
            updatedAt: Date.now()
          });
        }
      }

      await addDoc(collection(db, "warranty_complaints"), {
        partName: complaintPartName.trim(),
        serialNumber: complaintSn.trim() || "-",
        replacementName: isSwap ? replacementName.trim() : "",
        replacementSn: isSwap ? (replacementSn.trim() || "-") : "",
        replacementInvoiceUrl: newInvoiceUrl,
        resolutionType: complaintResolutionType,
        solutionDetail: complaintSolutionDetail.trim(),
        cost: numericCost,
        createdByEmail: (userEmail || "").toLowerCase(),
        createdAt: Date.now()
      });

      setSelectedPartOption("");
      setSelectedBuildComponentIndex("");
      setComplaintTargetEntry(null);
      setComplaintPartName("");
      setComplaintSn("");
      setComplaintResolutionType("Csere másikra");
      setComplaintSolutionDetail("");
      setComplaintCost("0");
      setReplacementName("");
      setReplacementSn("");
      setReplacementInvoiceFile(null);
      setShowComplaintForm(false);
    } catch (err) {
      console.error("Panasz mentési hiba:", err);
      setComplaintError(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingComplaint(false);
    }
  }

  async function handleDeleteComplaint(complaint) {
    if (!confirm(`Törlöd ezt a panaszt: ${complaint.partName}?`)) return;
    await deleteDoc(doc(db, "warranty_complaints", complaint.id));
  }

  const hasTargetComponents =
    Array.isArray(complaintTargetEntry?.componentRows) && complaintTargetEntry.componentRows.length > 0;

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <div>
          <h2 style={{ margin: 0 }}>Garancia nyilvántartás (1 hónap)</h2>
          <div className="muted" style={{ fontSize: 12 }}>
            Az eladás napjától számított 1 hónap garancia • Az eladott gépek automatikusan megjelennek
          </div>
        </div>
        <div className="row">
          <button
            className="btn btn-orange"
            onClick={() => (showComplaintForm ? setShowComplaintForm(false) : openComplaintForm())}
          >
            {showComplaintForm ? <X size={16} /> : <MessageSquareWarning size={16} />}
            {showComplaintForm ? "Bezárás" : "Panasz felvétele"}
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (showPcForm) {
                resetPcForm();
                setShowPcForm(false);
              } else {
                openNewPcForm();
              }
            }}
          >
            {showPcForm ? <X size={16} /> : <Monitor size={16} />}
            {showPcForm ? "Bezárás" : "Teljes gép garanciába"}
          </button>
          <button
            className="btn btn-green"
            onClick={() => {
              if (showForm) {
                resetForm();
                setShowForm(false);
              } else {
                openNewForm();
              }
            }}
          >
            {showForm ? <X size={16} /> : <Plus size={16} />}
            {showForm ? "Bezárás" : "Új tétel"}
          </button>
        </div>
      </div>

      {/* Teljes gép felvitele garanciába alkatrészenként + vevő nevével + gyűjtő számlákkal */}
      {showPcForm && (
        <form className="card" onSubmit={handleSavePc} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>
            {editingPcDocId ? "Teljes gép garanciájának szerkesztése" : "Teljes gép felvétele garanciába (alkatrészenként)"}
          </h3>
          <div className="muted" style={{ marginBottom: 10 }}>
            Az alkatrészek alapból ki vannak generálva — töltsd ki a típusokat és SN-eket, a vevő nevét, és töltsd fel a számlákat egyben.
          </div>

          <div className="grid-2" style={{ marginBottom: 12 }}>
            <input
              placeholder="Gép neve (pl. Budget GAMING PC)"
              value={pcName}
              onChange={(e) => setPcName(e.target.value)}
              required
            />
            <input
              placeholder="Vevő neve (pl. Kovács János)"
              value={pcBuyerName}
              onChange={(e) => setPcBuyerName(e.target.value)}
            />
            <div>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Eladás dátuma (+1 hónap garancia)
              </div>
              <input
                type="date"
                value={pcSoldDateStr}
                onChange={(e) => setPcSoldDateStr(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Megjegyzés a géphez (opcionális)
              </div>
              <input
                placeholder="Megjegyzés..."
                value={pcNote}
                onChange={(e) => setPcNote(e.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              marginBottom: 12
            }}
          >
            <div className="row" style={{ marginBottom: 8 }}>
              <strong>Alkatrészek és sorozatszámok (SN)</strong>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: "4px 9px", fontSize: 12 }}
                onClick={addPcComponentRow}
              >
                <Plus size={13} /> Új alkatrész sor
              </button>
            </div>

            {pcComponents.map((comp, idx) => (
              <div
                key={`pc-comp-${idx}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.85fr 1.25fr 1.2fr auto",
                  gap: 8,
                  marginBottom: 8,
                  alignItems: "center"
                }}
              >
                <input
                  placeholder="Kategória"
                  value={comp.category}
                  onChange={(e) => handlePcComponentChange(idx, "category", e.target.value)}
                />
                <input
                  placeholder={`${comp.category || "Alkatrész"} típusa (pl. RTX 3060 8 GB)`}
                  value={comp.name}
                  onChange={(e) => handlePcComponentChange(idx, "name", e.target.value)}
                />
                <input
                  placeholder="Sorozatszám (SN)"
                  value={comp.serialNumber}
                  onChange={(e) => handlePcComponentChange(idx, "serialNumber", e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-red"
                  style={{ padding: "6px 8px" }}
                  onClick={() => removePcComponentRow(idx)}
                  title="Sor törlése"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>

          {/* Gyűjtő számlafeltöltő a géphez */}
          <div
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            <div className="muted" style={{ fontSize: 12, marginBottom: 6 }}>
              Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)
            </div>
            <input
              type="file"
              multiple
              accept="application/pdf,image/*"
              onChange={(e) => setPcInvoiceFiles(Array.from(e.target.files || []))}
            />
            {pcInvoiceFiles.length > 0 && (
              <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                Kiválasztva ({pcInvoiceFiles.length}): {pcInvoiceFiles.map((f) => f.name).join(", ")}
              </div>
            )}
            {pcExistingInvoices.length > 0 && (
              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {pcExistingInvoices.map((inv) => (
                  <span
                    key={inv.id}
                    className="badge badge-indigo"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    {inv.label}
                    <button
                      type="button"
                      onClick={() =>
                        setPcExistingInvoices((prev) => prev.filter((x) => x.id !== inv.id))
                      }
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        cursor: "pointer",
                        padding: 0,
                        display: "inline-flex"
                      }}
                      title="Számla eltávolítása"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {pcErrorMsg && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {pcErrorMsg}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={savingPc}>
              {savingPc ? "Mentés..." : editingPcDocId ? "Módosítások mentése" : "Gép mentése garanciába"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                resetPcForm();
                setShowPcForm(false);
              }}
            >
              Mégse
            </button>
          </div>
        </form>
      )}

      {showComplaintForm && (
        <form className="card" onSubmit={handleSaveComplaint} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>
            Garanciális panasz felvétele
            {complaintTargetEntry ? ` — ${complaintTargetEntry.name}` : ""}
          </h3>
          <div className="muted" style={{ marginBottom: 10 }}>
            Válaszd ki a legördülő menüből a cserélt / garanciáztatott alkatrészt — az SN automatikusan beállítódik.
          </div>

          {hasTargetComponents ? (
            <div style={{ marginBottom: 10 }}>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Garanciáztatott alkatrész kiválasztása a gépből
              </div>
              <select
                value={selectedBuildComponentIndex}
                onChange={(e) => handleBuildComponentSelect(e.target.value)}
                required
              >
                {complaintTargetEntry.componentRows.map((c, idx) => (
                  <option key={`${c.id || idx}-${idx}`} value={String(idx)}>
                    {c.category ? `[${c.category}] ` : ""}
                    {c.name} — SN: {c.serialNumber || "-"}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div style={{ marginBottom: 10 }}>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Garanciáztatott alkatrész kiválasztása
              </div>
              <select
                value={selectedPartOption}
                onChange={(e) => handleSelectPartChange(e.target.value)}
                required
              >
                {selectableParts.length === 0 && (
                  <option value="">-- Nincs elérhető alkatrész --</option>
                )}
                {selectableParts.map((sp) => (
                  <option key={sp.key} value={sp.key}>
                    {sp.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div
            className="row"
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)",
              marginBottom: 10,
              fontSize: 13
            }}
          >
            <div>
              <span className="muted">Kiválasztott alkatrész: </span>
              <strong>{complaintPartName || "-"}</strong>
            </div>
            <div>
              <span className="muted">Automatikus SN: </span>
              <strong>{complaintSn || "-"}</strong>
            </div>
          </div>

          <div className="grid-2">
            <select
              value={complaintResolutionType}
              onChange={(e) => setComplaintResolutionType(e.target.value)}
            >
              {RESOLUTIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              placeholder="Költség neked (Ft, alapból 0)"
              value={complaintCost}
              onChange={(e) => setComplaintCost(e.target.value)}
            />
          </div>

          <div style={{ marginTop: 10 }}>
            <input
              placeholder="Megoldás részletei (pl. cserélve másik példányra, postaköltség, stb.)"
              value={complaintSolutionDetail}
              onChange={(e) => setComplaintSolutionDetail(e.target.value)}
            />
          </div>

          {complaintResolutionType === "Csere másikra" && (
            <div
              style={{
                marginTop: 12,
                padding: 12,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.025)"
              }}
            >
              <label style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <input
                  type="checkbox"
                  style={{ width: "auto" }}
                  checked={replaceInWarranty}
                  onChange={(e) => setReplaceInWarranty(e.target.checked)}
                />
                <span>Régi alkatrész cseréje az újra a garancia táblában</span>
              </label>

              {replaceInWarranty && (
                <div className="grid-2">
                  <input
                    placeholder="Új alkatrész neve (pl. Ryzen 5 5600)"
                    value={replacementName}
                    onChange={(e) => setReplacementName(e.target.value)}
                    required
                  />
                  <input
                    placeholder="Új alkatrész SN száma"
                    value={replacementSn}
                    onChange={(e) => setReplacementSn(e.target.value)}
                  />
                  <div style={{ gridColumn: "1 / -1" }}>
                    <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                      Új alkatrész számlája (opcionális — PDF vagy kép)
                    </div>
                    <input
                      type="file"
                      accept="application/pdf,image/*"
                      onChange={(e) => setReplacementInvoiceFile(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {complaintError && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {complaintError}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={savingComplaint}>
              {savingComplaint ? "Mentés..." : "Panasz mentése"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowComplaintForm(false)}
            >
              Mégse
            </button>
          </div>
        </form>
      )}

      {showForm && (
        <form className="card" onSubmit={handleSave} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>
            {editingItem ? `Garancia szerkesztése: ${editingItem.name}` : "Új alkatrész / tétel felvétele"}
          </h3>

          <div className="grid-2">
            <input
              placeholder="Alkatrész / tétel neve (pl. RX 6700 XT)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Vevő neve (opcionális)"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              placeholder="Sorozatszám (SN)"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <div>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Eladás dátuma (+1 hónap garancia)
              </div>
              <input
                type="date"
                value={soldDateStr}
                onChange={(e) => setSoldDateStr(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                Megjegyzés (opcionális)
              </div>
              <input
                placeholder="Megjegyzés..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>

          {/* Gyűjtő számlafeltöltő új / szerkesztett tételhez */}
          <div
            style={{
              marginTop: 12,
              padding: 10,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            <div className="muted" style={{ fontSize: 12, marginBottom: 6 }}>
              Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)
            </div>
            <input
              type="file"
              multiple
              accept="application/pdf,image/*"
              onChange={(e) => setItemInvoiceFiles(Array.from(e.target.files || []))}
            />
            {itemInvoiceFiles.length > 0 && (
              <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                Kiválasztva ({itemInvoiceFiles.length}): {itemInvoiceFiles.map((f) => f.name).join(", ")}
              </div>
            )}
            {itemExistingInvoices.length > 0 && (
              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {itemExistingInvoices.map((inv) => (
                  <span
                    key={inv.id}
                    className="badge badge-indigo"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    {inv.label}
                    <button
                      type="button"
                      onClick={() =>
                        setItemExistingInvoices((prev) => prev.filter((x) => x.id !== inv.id))
                      }
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        cursor: "pointer",
                        padding: 0,
                        display: "inline-flex"
                      }}
                      title="Számla eltávolítása"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {errorMsg && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {errorMsg}
            </div>
          )}

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={saving}>
              {saving ? "Mentés..." : editingItem ? "Módosítások mentése" : "Mentés"}
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

      <div className="row" style={{ marginBottom: 14 }}>
        <div className="row">
          <button
            className={`btn ${filterStatus === "active" ? "" : "btn-ghost"}`}
            onClick={() => setFilterStatus("active")}
          >
            Aktív ({activeCount})
          </button>
          <button
            className={`btn ${filterStatus === "expired" ? "" : "btn-ghost"}`}
            onClick={() => setFilterStatus("expired")}
          >
            Lejárt ({expiredCount})
          </button>
          <button
            className={`btn ${filterStatus === "all" ? "" : "btn-ghost"}`}
            onClick={() => setFilterStatus("all")}
          >
            Összes ({combinedEntries.length})
          </button>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <input
            placeholder="Keresés név, vevő, SN vagy kategória alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredEntries.length === 0 ? (
        <div className="card">
          <div className="muted">Nincs megjeleníthető garanciális tétel ebben a nézetben.</div>
        </div>
      ) : (
        <div className="grid-2">
          {filteredEntries.map((entry) => (
            <div
              className="card"
              key={entry.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 12,
                borderRadius: 12
              }}
            >
              <div>
                <div className="row" style={{ marginBottom: 8 }}>
                  <div className="row" style={{ gap: 8 }}>
                    <ShieldCheck size={18} color={entry.isExpired ? "#ef4444" : "#22c55e"} />
                    <strong style={{ fontSize: 15 }}>{entry.name}</strong>
                  </div>
                  <div className="row">
                    {entry.isAutoBuild && <span className="badge badge-blue">Eladott gép</span>}
                    {entry.isManualPc && <span className="badge badge-purple">Teljes gép</span>}
                    {entry.category && <span className="badge badge-indigo">{entry.category}</span>}
                    <span className={`badge ${entry.isExpired ? "badge-red" : "badge-green"}`}>
                      {entry.isExpired
                        ? "Lejárt"
                        : entry.daysLeft === 0
                          ? "Ma jár le"
                          : `${entry.daysLeft} nap hátra`}
                    </span>
                  </div>
                </div>

                {entry.buyerName && (
                  <div
                    className="muted"
                    style={{
                      fontSize: 13,
                      marginBottom: 8,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6
                    }}
                  >
                    <User size={13} /> Vevő: <strong>{entry.buyerName}</strong>
                  </div>
                )}

                <div
                  className="row"
                  style={{
                    padding: "8px 10px",
                    borderRadius: 8,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border)",
                    marginBottom: 10,
                    fontSize: 13
                  }}
                >
                  <span className="muted" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                    <Clock size={13} /> Eladva: <strong>{formatDateHu(entry.soldAt)}</strong>
                  </span>
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                    className={entry.isExpired ? "red" : "green"}
                  >
                    {entry.isExpired && <AlertTriangle size={13} />}
                    Lejár: <strong>{formatDateHu(entry.expiresAt)}</strong>
                  </span>
                </div>

                {entry.componentRows && entry.componentRows.length > 0 ? (
                  <div
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      background: "rgba(255, 255, 255, 0.015)"
                    }}
                  >
                    {entry.componentRows.map((comp, i) => (
                      <div
                        key={`${comp.id || i}-${i}`}
                        className="row"
                        style={{
                          padding: "6px 0",
                          borderBottom: i < entry.componentRows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                          gap: 8
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 500 }}>{comp.name}</div>
                          {comp.category && (
                            <div className="muted" style={{ fontSize: 11 }}>{comp.category}</div>
                          )}
                        </div>
                        <span
                          className="muted"
                          style={{
                            fontSize: 12,
                            textAlign: "right",
                            wordBreak: "break-all"
                          }}
                        >
                          SN: {comp.serialNumber || "-"}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="muted" style={{ fontSize: 13 }}>
                    SN: <strong>{entry.serialNumber}</strong>
                  </div>
                )}

                {entry.note && (
                  <div className="muted" style={{ marginTop: 8, fontSize: 12 }}>
                    {entry.note}
                  </div>
                )}

                {entry.invoices?.length > 0 && (
                  <div
                    style={{
                      marginTop: 10,
                      paddingTop: 8,
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4
                    }}
                  >
                    {entry.invoices.map((inv) => (
                      <a
                        key={`${entry.id}-${inv.id}`}
                        href={inv.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 5 }}
                      >
                        <FileText size={13} /> Számla: {inv.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="row" style={{ paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <button className="btn btn-ghost" onClick={() => openEditForm(entry)}>
                  <Pencil size={14} /> Szerkesztés
                </button>
                <button className="btn btn-ghost" onClick={() => openComplaintForm(entry)}>
                  <MessageSquareWarning size={14} /> Panasz
                </button>
                {!entry.isAutoBuild && (
                  <button className="btn btn-red" onClick={() => handleDelete(entry)} title="Törlés">
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="card" style={{ marginTop: 18, borderRadius: 12 }}>
        <div className="row" style={{ marginBottom: 10 }}>
          <h3 style={{ margin: 0 }}>
            Garanciális panaszok ({warrantyComplaints.length})
          </h3>
          <span className="muted" style={{ fontSize: 13 }}>
            Összes költség: <strong className="red">{totalComplaintCost.toLocaleString("hu-HU")} Ft</strong>
          </span>
        </div>

        {warrantyComplaints.length === 0 ? (
          <div className="muted">Még nincs rögzített garanciális panasz.</div>
        ) : (
          warrantyComplaints.map((c) => (
            <div
              key={c.id}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div className="row">
                <div>
                  <strong>{c.partName}</strong>
                  {c.serialNumber && c.serialNumber !== "-" && (
                    <span className="muted" style={{ marginLeft: 8, fontSize: 12 }}>
                      SN: {c.serialNumber}
                    </span>
                  )}
                  {c.replacementName && (
                    <div className="green" style={{ fontSize: 12, marginTop: 2 }}>
                      → Új csere: <strong>{c.replacementName}</strong>
                      {c.replacementSn && c.replacementSn !== "-" ? ` (SN: ${c.replacementSn})` : ""}
                    </div>
                  )}
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                    Megoldás: <strong>{c.resolutionType || "Egyéb"}</strong>
                    {c.solutionDetail ? ` — ${c.solutionDetail}` : ""}
                    {c.createdAt ? ` • ${formatDateHu(c.createdAt)}` : ""}
                  </div>
                  {c.replacementInvoiceUrl && (
                    <div style={{ marginTop: 4 }}>
                      <a
                        href={c.replacementInvoiceUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fb923c", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 4 }}
                      >
                        <FileText size={13} /> Cserealkatrész számlája
                      </a>
                    </div>
                  )}
                </div>
                <div className="row">
                  <strong className={Number(c.cost || 0) > 0 ? "red" : "green"}>
                    {Number(c.cost || 0).toLocaleString("hu-HU")} Ft
                  </strong>
                  <button
                    type="button"
                    className="btn btn-red"
                    style={{ padding: "4px 8px" }}
                    onClick={() => handleDeleteComplaint(c)}
                    title="Panasz törlése"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
