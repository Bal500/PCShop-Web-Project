import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Plus, X, ChevronDown, ChevronUp, Trash2, FileText } from "lucide-react";
import { db } from "../firebase";

const ALLOWED_EMAILS = [
  "fabianbal500@gmail.com",
  "beastmaster0626@gmail.com"
];

const INITIAL_SALES_LIMIT = 10;
const INITIAL_CARD_LIMIT = 10;

function isThisMonth(ts) {
  if (!ts) return false;
  const d = new Date(Number(ts));
  const now = new Date();
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
}

function getBuildInvoices(build, parts) {
  const byId = new Map((parts || []).map((p) => [p.id, p]));
  const ids = Array.isArray(build.partIds)
    ? build.partIds
    : Array.isArray(build.parts)
      ? build.parts.map((p) => (typeof p === "string" ? p : p?.id)).filter(Boolean)
      : [];

  const result = [];
  const seen = new Set();

  ids.forEach((id) => {
    const part = byId.get(id);
    if (part?.invoiceFileUrl && !seen.has(part.invoiceFileUrl)) {
      seen.add(part.invoiceFileUrl);
      result.push({
        id: part.id,
        label: part.category ? `${part.name} (${part.category})` : part.name,
        url: part.invoiceFileUrl
      });
    }
  });

  return result;
}

export default function FinanceTab({
  parts = [],
  builds = [],
  cardExpenses = [],
  manualSales = [],
  warrantyComplaints = [],
  userEmail
}) {
  const currentEmail = (userEmail || "").toLowerCase();

  const [showAddExpense, setShowAddExpense] = useState(false);
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [savingExpense, setSavingExpense] = useState(false);
  const [expenseError, setExpenseError] = useState("");

  const [showAddSale, setShowAddSale] = useState(false);
  const [saleTitle, setSaleTitle] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [saleCost, setSaleCost] = useState("0");
  const [saleNote, setSaleNote] = useState("");
  const [savingSale, setSavingSale] = useState(false);
  const [saleError, setSaleError] = useState("");

  const [showAllSales, setShowAllSales] = useState(false);
  const [expandedCardOwners, setExpandedCardOwners] = useState({});
  const [deletingEntryId, setDeletingEntryId] = useState(null);
  const [deleteTargetEntry, setDeleteTargetEntry] = useState(null);

  const activeParts = (parts || []).filter((p) => p.status !== "Eladva");
  const totalInvested = activeParts.reduce((s, p) => s + Number(p.purchasePrice || 0), 0);
  const expectedMargin = Math.round(totalInvested * 1.225);

  const activePartCardItems = (parts || [])
    .filter((p) => p.paidWithOwnCard)
    .map((p) => ({
      id: p.id,
      kind: "part",
      name: p.name,
      amount: p.purchasePrice || 0,
      note: `Készlet • SN: ${p.serialNumber || "-"}`,
      ownerEmail: (p.paidByEmail || currentEmail).toLowerCase(),
      createdAt: p.createdAt || 0
    }));

  const manualCardItems = (cardExpenses || [])
    .filter((e) => !e.settled)
    .map((e) => ({
      id: e.id,
      kind: "manual",
      name: e.name,
      amount: e.amount || 0,
      note: e.note || "Korábbi / külső tétel",
      ownerEmail: (e.createdByEmail || "").toLowerCase(),
      createdAt: e.createdAt || 0
    }));

  const allCardItems = [...manualCardItems, ...activePartCardItems].sort(
    (a, b) => b.createdAt - a.createdAt
  );

  const ownerEmails = Array.from(
    new Set([
      ...ALLOWED_EMAILS.map((e) => e.toLowerCase()),
      ...allCardItems.map((i) => i.ownerEmail).filter(Boolean)
    ])
  );

  const soldSoloParts = (parts || []).filter((p) => p.status === "Eladva" && !p.buildId);
  const soldBuilds = (builds || []).filter((b) => b.status === "Eladva");

  const allSalesEntries = [
    ...soldBuilds.map((b) => ({
      id: `build-${b.id}`,
      rawId: b.id,
      source: "build",
      partIds: Array.isArray(b.partIds) ? b.partIds : [],
      title: `[Gép] ${b.name}`,
      cost: Number(b.totalCost || 0),
      price: Number(b.soldPrice || 0),
      profit: Number(b.soldPrice || 0) - Number(b.totalCost || 0),
      soldAt: b.soldAt || 0,
      note: "",
      invoices: getBuildInvoices(b, parts)
    })),
    ...soldSoloParts.map((p) => ({
      id: `part-${p.id}`,
      rawId: p.id,
      source: "part",
      title: p.name,
      cost: Number(p.purchasePrice || 0),
      price: Number(p.soldPrice || 0),
      profit: Number(p.soldPrice || 0) - Number(p.purchasePrice || 0),
      soldAt: p.soldAt || 0,
      note: "",
      invoices: p.invoiceFileUrl ? [{ id: p.id, label: p.name, url: p.invoiceFileUrl }] : []
    })),
    ...(manualSales || []).map((s) => ({
      id: `spontaneous-${s.id}`,
      rawId: s.id,
      source: "spontaneous",
      title: `[Spontán] ${s.title}`,
      cost: Number(s.cost || 0),
      price: Number(s.price || 0),
      profit: Number(s.price || 0) - Number(s.cost || 0),
      soldAt: s.soldAt || s.createdAt || 0,
      note: s.note || "",
      invoices: []
    }))
  ].sort((a, b) => b.soldAt - a.soldAt);

  // Garanciáztatási költségek (e havi és összesített)
  const monthWarrantyCost = (warrantyComplaints || [])
    .filter((c) => isThisMonth(c.createdAt))
    .reduce((sum, c) => sum + Number(c.cost || 0), 0);

  const allTimeWarrantyCost = (warrantyComplaints || []).reduce(
    (sum, c) => sum + Number(c.cost || 0),
    0
  );

  const monthEntries = allSalesEntries.filter((entry) => isThisMonth(entry.soldAt));
  const monthRevenue = monthEntries.reduce((s, entry) => s + Number(entry.price || 0), 0);
  const monthGrossProfit = monthEntries.reduce((s, entry) => s + Number(entry.profit || 0), 0);
  const monthNetProfit = monthGrossProfit - monthWarrantyCost;

  const allTimeGrossProfit = allSalesEntries.reduce((s, entry) => s + Number(entry.profit || 0), 0);
  const allTimeNetProfit = allTimeGrossProfit - allTimeWarrantyCost;

  const hasMoreSales = allSalesEntries.length > INITIAL_SALES_LIMIT;
  const visibleSalesLog = showAllSales
    ? allSalesEntries
    : allSalesEntries.slice(0, INITIAL_SALES_LIMIT);

  function toggleCardOwner(owner) {
    setExpandedCardOwners((prev) => ({ ...prev, [owner]: !prev[owner] }));
  }

  async function handleAddCardExpense(e) {
    e.preventDefault();
    setExpenseError("");
    const numericAmount = Number(amount);
    if (
      !itemName.trim() ||
      amount.trim() === "" ||
      Number.isNaN(numericAmount) ||
      numericAmount < 0
    ) {
      setExpenseError("Adj meg érvényes tételnevet és összeget (0 Ft is lehet).");
      return;
    }

    setSavingExpense(true);
    try {
      await addDoc(collection(db, "card_expenses"), {
        name: itemName.trim(),
        amount: numericAmount,
        note: note.trim(),
        createdByEmail: currentEmail,
        settled: false,
        createdAt: Date.now()
      });
      setItemName("");
      setAmount("");
      setNote("");
      setShowAddExpense(false);
    } catch (err) {
      setExpenseError(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingExpense(false);
    }
  }

  async function settleCardItem(item) {
    if (item.ownerEmail !== currentEmail) return;
    if (item.kind === "part") {
      await updateDoc(doc(db, "parts", item.id), { paidWithOwnCard: false });
    } else {
      await updateDoc(doc(db, "card_expenses", item.id), {
        settled: true,
        settledAt: Date.now()
      });
    }
  }

  async function handleAddSpontaneousSale(e) {
    e.preventDefault();
    setSaleError("");
    const numericPrice = Number(salePrice);
    const numericCost = saleCost.trim() === "" ? 0 : Number(saleCost);

    if (
      !saleTitle.trim() ||
      salePrice.trim() === "" ||
      Number.isNaN(numericPrice) ||
      numericPrice < 0
    ) {
      setSaleError("Adj meg megnevezést és érvényes eladási árat (0 Ft is lehet).");
      return;
    }
    if (Number.isNaN(numericCost) || numericCost < 0) {
      setSaleError("A költség/beszerzés nem lehet negatív.");
      return;
    }

    setSavingSale(true);
    try {
      const now = Date.now();
      await addDoc(collection(db, "sales_log"), {
        title: saleTitle.trim(),
        price: numericPrice,
        cost: numericCost,
        note: saleNote.trim(),
        createdByEmail: currentEmail,
        soldAt: now,
        createdAt: now
      });
      setSaleTitle("");
      setSalePrice("");
      setSaleCost("0");
      setSaleNote("");
      setShowAddSale(false);
    } catch (err) {
      setSaleError(`Hiba mentés közben: ${err?.message || "Ismeretlen hiba"}`);
    } finally {
      setSavingSale(false);
    }
  }

  async function handleConfirmDeleteSalesEntry() {
    if (!deleteTargetEntry) return;
    const entry = deleteTargetEntry;
    setDeleteTargetEntry(null);

    setDeletingEntryId(entry.id);
    try {
      if (entry.source === "spontaneous") {
        await deleteDoc(doc(db, "sales_log", entry.rawId));
      } else if (entry.source === "part") {
        await updateDoc(doc(db, "parts", entry.rawId), {
          status: "Készleten",
          soldPrice: null,
          soldAt: null,
          buildId: null
        });
      } else if (entry.source === "build") {
        await updateDoc(doc(db, "builds", entry.rawId), {
          status: "Összerakva",
          soldPrice: null,
          soldAt: null
        });
        if (Array.isArray(entry.partIds) && entry.partIds.length > 0) {
          await Promise.all(
            entry.partIds.map((pid) =>
              updateDoc(doc(db, "parts", pid), {
                status: "Beépítve",
                soldAt: null
              }).catch(() => null)
            )
          );
        }
      }
    } finally {
      setDeletingEntryId(null);
    }
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Pénzügy & Profit</h2>
        <div className="row">
          <button
            className="btn btn-green"
            onClick={() => {
              setSaleError("");
              setShowAddSale((v) => !v);
            }}
          >
            {showAddSale ? <X size={15} /> : <Plus size={15} />}
            {showAddSale ? "Bezárás" : "Spontán eladás"}
          </button>
          <button
            className="btn btn-purple"
            onClick={() => {
              setExpenseError("");
              setShowAddExpense((v) => !v);
            }}
          >
            {showAddExpense ? <X size={15} /> : <Plus size={15} />}
            {showAddExpense ? "Bezárás" : "Saját kártyás tétel"}
          </button>
        </div>
      </div>

      {showAddSale && (
        <form className="card" onSubmit={handleAddSpontaneousSale} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>Új spontán eladás rögzítése</h3>
          <div className="muted" style={{ marginBottom: 10 }}>
            Gyors, nem készletes vagy eseti eladások (pl. kábel, hűtő, apróság) felvétele az eladási naplóba.
          </div>
          <div className="grid-2">
            <input
              placeholder="Megnevezés (pl. DisplayPort kábel / 12cm venti)"
              value={saleTitle}
              onChange={(e) => setSaleTitle(e.target.value)}
              required
            />
            <input
              type="number"
              min="0"
              placeholder="Eladási ár / bevétel (Ft)"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              required
            />
            <input
              type="number"
              min="0"
              placeholder="Beszerzés / költség (Ft, alapból 0)"
              value={saleCost}
              onChange={(e) => setSaleCost(e.target.value)}
            />
            <input
              placeholder="Megjegyzés (opcionális)"
              value={saleNote}
              onChange={(e) => setSaleNote(e.target.value)}
            />
          </div>
          {saleError && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {saleError}
            </div>
          )}
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={savingSale}>
              {savingSale ? "Mentés..." : "Felvétel a naplóba"}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setShowAddSale(false)}>
              Mégse
            </button>
          </div>
        </form>
      )}

      {showAddExpense && (
        <form className="card" onSubmit={handleAddCardExpense} style={{ marginBottom: 16 }}>
          <h3 style={{ marginTop: 0 }}>Új saját kártyás tétel ({currentEmail})</h3>
          <div className="muted" style={{ marginBottom: 10 }}>
            Korábbi, már nem a készletben lévő alkatrészek vagy külső kártyás kötések rögzítéséhez.
          </div>
          <div className="grid-2">
            <input
              placeholder="Alkatrész / tétel neve (pl. GTX 1660 Super)"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
            <input
              type="number"
              min="0"
              placeholder="Összeg (Ft) — 0 is lehet"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input
              placeholder="Megjegyzés (opcionális, pl. már eladott gépben volt)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          {expenseError && (
            <div className="red" style={{ marginTop: 8, fontSize: 13 }}>
              {expenseError}
            </div>
          )}
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn btn-green" type="submit" disabled={savingExpense}>
              {savingExpense ? "Mentés..." : "Rögzítés a saját kártyámra"}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setShowAddExpense(false)}>
              Mégse
            </button>
          </div>
        </form>
      )}

      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Profit</h3>
          <div className="row">
            <span>E havi árbevétel:</span>
            <strong>{monthRevenue.toLocaleString("hu-HU")} Ft</strong>
          </div>
          <div className="row" style={{ marginTop: 6 }}>
            <span>E havi garanciaköltség:</span>
            <strong className={monthWarrantyCost > 0 ? "red" : "muted"}>
              -{monthWarrantyCost.toLocaleString("hu-HU")} Ft
            </strong>
          </div>
          <div className="row" style={{ marginTop: 6 }}>
            <strong>E havi tiszta profit (garancia után):</strong>
            <strong className={monthNetProfit >= 0 ? "green" : "red"}>
              {monthNetProfit >= 0 ? "+" : ""}
              {monthNetProfit.toLocaleString("hu-HU")} Ft
            </strong>
          </div>
          <div className="row" style={{ marginTop: 6 }}>
            <span className="muted">Összesített garanciaköltség:</span>
            <strong className={allTimeWarrantyCost > 0 ? "red" : "muted"}>
              -{allTimeWarrantyCost.toLocaleString("hu-HU")} Ft
            </strong>
          </div>
          <div className="row" style={{ marginTop: 4 }}>
            <span className="muted">Összesített profit (garancia után):</span>
            <strong className={allTimeNetProfit >= 0 ? "green" : "red"}>
              {allTimeNetProfit >= 0 ? "+" : ""}
              {allTimeNetProfit.toLocaleString("hu-HU")} Ft
            </strong>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Raktárérték</h3>
          <div className="row">
            <span>Befektetett tőke:</span>
            <strong>{totalInvested.toLocaleString("hu-HU")} Ft</strong>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <strong>Várható árrés (22.5%):</strong>
            <strong className="green" style={{ fontSize: 15 }}>
              {expectedMargin.toLocaleString("hu-HU")} Ft
            </strong>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 4 }}>
        {ownerEmails.map((owner) => {
          const items = allCardItems.filter((i) => i.ownerEmail === owner);
          const sum = items.reduce((s, i) => s + Number(i.amount || 0), 0);
          const isMine = owner === currentEmail;
          const isExpanded = !!expandedCardOwners[owner];
          const hasMoreCardItems = items.length > INITIAL_CARD_LIMIT;
          const visibleCardItems = isExpanded ? items : items.slice(0, INITIAL_CARD_LIMIT);

          return (
            <div className="card" key={owner}>
              <div className="row" style={{ marginBottom: 8 }}>
                <h3 style={{ margin: 0 }}>{owner}</h3>
                <div className="row">
                  {hasMoreCardItems && (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      style={{ padding: "4px 9px", fontSize: 12 }}
                      onClick={() => toggleCardOwner(owner)}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={13} /> Kevesebb
                        </>
                      ) : (
                        <>
                          <ChevronDown size={13} /> Összes ({items.length})
                        </>
                      )}
                    </button>
                  )}
                  <span className={`badge ${isMine ? "badge-purple" : "badge-blue"}`}>
                    {isMine ? "Saját kártyád" : "Másik fiók"}
                  </span>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="muted">Nincs elszámolatlan saját kártyás tétel.</div>
              ) : (
                <>
                  {visibleCardItems.map((item) => (
                    <div
                      className="row"
                      key={`${item.kind}-${item.id}`}
                      style={{ padding: "8px 0", borderBottom: "1px solid var(--border)" }}
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <div className="muted">
                          {Number(item.amount || 0).toLocaleString("hu-HU")} Ft • {item.note}
                        </div>
                      </div>
                      {isMine ? (
                        <button className="btn btn-purple" onClick={() => settleCardItem(item)}>
                          Kivettem
                        </button>
                      ) : (
                        <span className="muted" style={{ fontSize: 12 }}>
                          Csak megtekinthető
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="row" style={{ marginTop: 10 }}>
                    <strong>Ki nem vett pénz összesen:</strong>
                    <strong style={{ color: "#c084fc" }}>{sum.toLocaleString("hu-HU")} Ft</strong>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="card">
        <div className="row" style={{ marginBottom: 8 }}>
          <h3 style={{ margin: 0 }}>Eladási Napló ({allSalesEntries.length})</h3>
          <div className="row">
            <button
              type="button"
              className="btn btn-green"
              style={{ padding: "5px 10px", fontSize: 12 }}
              onClick={() => {
                setSaleError("");
                setShowAddSale((v) => !v);
              }}
            >
              <Plus size={14} /> Spontán eladás
            </button>
            {hasMoreSales && (
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: "5px 10px", fontSize: 12 }}
                onClick={() => setShowAllSales((v) => !v)}
              >
                {showAllSales ? (
                  <>
                    <ChevronUp size={14} /> Kevesebb mutatása
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} /> Összes megjelenítése ({allSalesEntries.length})
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {visibleSalesLog.map((entry) => (
          <div key={entry.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
            <div className="row">
              <div>
                <span>
                  {entry.title} ({entry.cost.toLocaleString("hu-HU")} →{" "}
                  {entry.price.toLocaleString("hu-HU")} Ft)
                </span>
                {entry.note && <div className="muted">{entry.note}</div>}
              </div>
              <div className="row">
                <strong className={entry.profit >= 0 ? "green" : "red"}>
                  {entry.profit >= 0 ? "+" : ""}
                  {entry.profit.toLocaleString("hu-HU")} Ft
                </strong>
                <button
                  type="button"
                  className="btn btn-red"
                  style={{ padding: "4px 8px" }}
                  disabled={deletingEntryId === entry.id}
                  onClick={() => setDeleteTargetEntry(entry)}
                  title="Eltávolítás a naplóból"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {entry.source === "build" && entry.invoices?.length > 0 && (
              <div className="row" style={{ marginTop: 6, flexWrap: "wrap", gap: 10 }}>
                {entry.invoices.map((inv) => (
                  <a
                    key={`${entry.id}-${inv.id}`}
                    href={inv.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#fb923c",
                      fontSize: 12,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4
                    }}
                  >
                    <FileText size={13} /> Számla: {inv.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Eladási napló törlés megerősítő modál */}
      {deleteTargetEntry && (
        <div
          onClick={() => setDeleteTargetEntry(null)}
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
            style={{ width: "100%", maxWidth: 430, margin: 0, borderRadius: 12 }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>Eltávolítás az eladási naplóból</h3>
              <button
                className="btn btn-ghost"
                style={{ padding: 6 }}
                onClick={() => setDeleteTargetEntry(null)}
              >
                <X size={16} />
              </button>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              {deleteTargetEntry.source === "spontaneous" ? (
                <>
                  Biztosan törlöd a naplóból: <strong>{deleteTargetEntry.title}</strong>?
                </>
              ) : (
                <>
                  Eltávolítod az eladási naplóból: <strong>{deleteTargetEntry.title}</strong>?
                  <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
                    A tétel / gép visszakerül a készletbe vagy az összerakott gépek közé.
                  </div>
                </>
              )}
            </div>
            <div className="row" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button className="btn btn-ghost" onClick={() => setDeleteTargetEntry(null)}>
                Mégse
              </button>
              <button className="btn btn-red" onClick={handleConfirmDeleteSalesEntry}>
                <Trash2 size={14} /> Megerősítés
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
