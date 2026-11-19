import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Plus, X, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { db } from "../firebase";

const ALLOWED_EMAILS = [
  "fabianbal500@gmail.com",
  "beastmaster0626@gmail.com"
];

const INITIAL_SALES_LIMIT = 10;

function isThisMonth(ts) {
  if (!ts) return false;
  const d = new Date(ts);
  const now = new Date();
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
}

export default function FinanceTab({ parts, builds, cardExpenses = [], manualSales = [], userEmail }) {
  const currentEmail = (userEmail || "").toLowerCase();

  // Saját kártyás tétel űrlap
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [savingExpense, setSavingExpense] = useState(false);
  const [expenseError, setExpenseError] = useState("");

  // Spontán eladás űrlap
  const [showAddSale, setShowAddSale] = useState(false);
  const [saleTitle, setSaleTitle] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [saleCost, setSaleCost] = useState("0");
  const [saleNote, setSaleNote] = useState("");
  const [savingSale, setSavingSale] = useState(false);
  const [saleError, setSaleError] = useState("");

  const [showAllSales, setShowAllSales] = useState(false);

  const activeParts = parts.filter((p) => p.status !== "Eladva");
  const totalInvested = activeParts.reduce((s, p) => s + (p.purchasePrice || 0), 0);
  const totalMarket = activeParts.reduce((s, p) => s + (p.topMarketOffers?.[0]?.price || p.purchasePrice || 0), 0);

  const activePartCardItems = parts
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

  const manualCardItems = cardExpenses
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

  const allCardItems = [...manualCardItems, ...activePartCardItems].sort((a, b) => b.createdAt - a.createdAt);

  const ownerEmails = Array.from(
    new Set([
      ...ALLOWED_EMAILS.map((e) => e.toLowerCase()),
      ...allCardItems.map((i) => i.ownerEmail).filter(Boolean)
    ])
  );

  const soldSoloParts = parts.filter((p) => p.status === "Eladva" && !p.buildId);
  const soldBuilds = builds.filter((b) => b.status === "Eladva");

  const allSalesEntries = [
    ...soldBuilds.map((b) => ({
      id: `build-${b.id}`,
      rawId: b.id,
      source: "build",
      title: `[Gép] ${b.name}`,
      cost: b.totalCost || 0,
      price: b.soldPrice || 0,
      profit: (b.soldPrice || 0) - (b.totalCost || 0),
      soldAt: b.soldAt || 0,
      note: ""
    })),
    ...soldSoloParts.map((p) => ({
      id: `part-${p.id}`,
      rawId: p.id,
      source: "part",
      title: p.name,
      cost: p.purchasePrice || 0,
      price: p.soldPrice || 0,
      profit: (p.soldPrice || 0) - (p.purchasePrice || 0),
      soldAt: p.soldAt || 0,
      note: ""
    })),
    ...manualSales.map((s) => ({
      id: `spontaneous-${s.id}`,
      rawId: s.id,
      source: "spontaneous",
      title: `[Spontán] ${s.title}`,
      cost: s.cost || 0,
      price: s.price || 0,
      profit: (s.price || 0) - (s.cost || 0),
      soldAt: s.soldAt || s.createdAt || 0,
      note: s.note || ""
    }))
  ].sort((a, b) => b.soldAt - a.soldAt);

  const monthEntries = allSalesEntries.filter((entry) => isThisMonth(entry.soldAt));
  const monthRevenue = monthEntries.reduce((s, entry) => s + (entry.price || 0), 0);
  const monthProfit = monthEntries.reduce((s, entry) => s + (entry.profit || 0), 0);
  const allTimeProfit = allSalesEntries.reduce((s, entry) => s + (entry.profit || 0), 0);

  const hasMoreSales = allSalesEntries.length > INITIAL_SALES_LIMIT;
  const visibleSalesLog = showAllSales ? allSalesEntries : allSalesEntries.slice(0, INITIAL_SALES_LIMIT);

  async function handleAddCardExpense(e) {
    e.preventDefault();
    setExpenseError("");
    const numericAmount = Number(amount);
    if (!itemName.trim() || amount.trim() === "" || Number.isNaN(numericAmount) || numericAmount < 0) {
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

    if (!saleTitle.trim() || salePrice.trim() === "" || Number.isNaN(numericPrice) || numericPrice < 0) {
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

  async function handleDeleteSpontaneousSale(rawId) {
    if (!confirm("Törlöd ezt a spontán eladási bejegyzést?")) return;
    await deleteDoc(doc(db, "sales_log", rawId));
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
          {saleError && <div className="red" style={{ marginTop: 8, fontSize: 13 }}>{saleError}</div>}
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
          {expenseError && <div className="red" style={{ marginTop: 8, fontSize: 13 }}>{expenseError}</div>}
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
          <h3 style={{ marginTop: 0 }}>Havi Realizált Profit</h3>
          <div className="row"><span>E havi árbevétel:</span><strong>{monthRevenue.toLocaleString("hu-HU")} Ft</strong></div>
          <div className="row" style={{ marginTop: 6 }}>
            <strong>E havi tiszta profit:</strong>
            <strong className={monthProfit >= 0 ? "green" : "red"}>{monthProfit >= 0 ? "+" : ""}{monthProfit.toLocaleString("hu-HU")} Ft</strong>
          </div>
          <div className="row" style={{ marginTop: 6 }}>
            <span className="muted">Összesített profit:</span>
            <strong>{allTimeProfit >= 0 ? "+" : ""}{allTimeProfit.toLocaleString("hu-HU")} Ft</strong>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Aktív Készlet Mérlege</h3>
          <div className="row"><span>Befektetett tőke:</span><strong>{totalInvested.toLocaleString("hu-HU")} Ft</strong></div>
          <div className="row" style={{ marginTop: 6 }}><span>Legolcsóbb piaci érték:</span><strong>{totalMarket.toLocaleString("hu-HU")} Ft</strong></div>
          <div className="row" style={{ marginTop: 6 }}>
            <strong>Várható árrés:</strong>
            <strong className={totalMarket - totalInvested >= 0 ? "green" : "red"}>
              {totalMarket - totalInvested >= 0 ? "+" : ""}{(totalMarket - totalInvested).toLocaleString("hu-HU")} Ft
            </strong>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 4 }}>
        {ownerEmails.map((owner) => {
          const items = allCardItems.filter((i) => i.ownerEmail === owner);
          const sum = items.reduce((s, i) => s + (i.amount || 0), 0);
          const isMine = owner === currentEmail;

          return (
            <div className="card" key={owner}>
              <div className="row" style={{ marginBottom: 8 }}>
                <h3 style={{ margin: 0 }}>{owner}</h3>
                <span className={`badge ${isMine ? "badge-purple" : "badge-blue"}`}>
                  {isMine ? "Saját kártyád" : "Másik fiók"}
                </span>
              </div>

              {items.length === 0 ? (
                <div className="muted">Nincs elszámolatlan saját kártyás tétel.</div>
              ) : (
                <>
                  {items.map((item) => (
                    <div className="row" key={`${item.kind}-${item.id}`} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
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
                        <span className="muted" style={{ fontSize: 12 }}>Csak megtekinthető</span>
                      )}
                    </div>
                  ))}
                  <div className="row" style={{ marginTop: 10 }}>
                    <strong>Kintlévőség összesen:</strong>
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
          <div className="row" key={entry.id} style={{ padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
            <div>
              <span>
                {entry.title} ({entry.cost.toLocaleString("hu-HU")} → {entry.price.toLocaleString("hu-HU")} Ft)
              </span>
              {entry.note && <div className="muted">{entry.note}</div>}
            </div>
            <div className="row">
              <strong className={entry.profit >= 0 ? "green" : "red"}>
                {entry.profit >= 0 ? "+" : ""}{entry.profit.toLocaleString("hu-HU")} Ft
              </strong>
              {entry.source === "spontaneous" && (
                <button
                  type="button"
                  className="btn btn-red"
                  style={{ padding: "4px 8px" }}
                  onClick={() => handleDeleteSpontaneousSale(entry.rawId)}
                  title="Törlés"
                >
                  <Trash2 size={13} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
