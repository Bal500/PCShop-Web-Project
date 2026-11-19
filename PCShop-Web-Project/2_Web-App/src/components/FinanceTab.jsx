import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function isThisMonth(ts) {
  if (!ts) return false;
  const d = new Date(ts);
  const now = new Date();
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
}

export default function FinanceTab({ parts, builds }) {
  const activeParts = parts.filter((p) => p.status !== "Eladva");
  const totalInvested = activeParts.reduce((s, p) => s + (p.purchasePrice || 0), 0);
  const totalMarket = activeParts.reduce((s, p) => s + (p.topMarketOffers?.[0]?.price || p.purchasePrice || 0), 0);

  const ownCardParts = parts.filter((p) => p.paidWithOwnCard);
  const totalOwnCardDebt = ownCardParts.reduce((s, p) => s + (p.purchasePrice || 0), 0);

  const soldSoloParts = parts.filter((p) => p.status === "Eladva" && !p.buildId);
  const soldBuilds = builds.filter((b) => b.status === "Eladva");

  const monthSolo = soldSoloParts.filter((p) => isThisMonth(p.soldAt));
  const monthBuilds = soldBuilds.filter((b) => isThisMonth(b.soldAt));

  const monthRevenue =
    monthSolo.reduce((s, p) => s + (p.soldPrice || 0), 0) +
    monthBuilds.reduce((s, b) => s + (b.soldPrice || 0), 0);

  const monthProfit =
    monthSolo.reduce((s, p) => s + ((p.soldPrice || 0) - (p.purchasePrice || 0)), 0) +
    monthBuilds.reduce((s, b) => s + ((b.soldPrice || 0) - (b.totalCost || 0)), 0);

  const allTimeProfit =
    soldSoloParts.reduce((s, p) => s + ((p.soldPrice || 0) - (p.purchasePrice || 0)), 0) +
    soldBuilds.reduce((s, b) => s + ((b.soldPrice || 0) - (b.totalCost || 0)), 0);

  async function settleCard(id) {
    await updateDoc(doc(db, "parts", id), { paidWithOwnCard: false });
  }

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Pénzügy & Profit</h2>

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

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Saját kártyával fizetve (Elszámolásra vár)</h3>
        {ownCardParts.length === 0 ? (
          <div className="muted">Nincs elszámolatlan saját kártyás tétel.</div>
        ) : (
          <>
            {ownCardParts.map((p) => (
              <div className="row" key={p.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <strong>{p.name}</strong>
                  <div className="muted">{p.purchasePrice?.toLocaleString("hu-HU")} Ft • {p.paidByEmail || "Saját kártya"}</div>
                </div>
                <button className="btn btn-purple" onClick={() => settleCard(p.id)}>Kivettem</button>
              </div>
            ))}
            <div className="row" style={{ marginTop: 10 }}>
              <strong>Tartozás összesen:</strong>
              <strong style={{ color: "#c084fc" }}>{totalOwnCardDebt.toLocaleString("hu-HU")} Ft</strong>
            </div>
          </>
        )}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Eladási Napló</h3>
        {soldBuilds.map((b) => {
          const pr = (b.soldPrice || 0) - (b.totalCost || 0);
          return (
            <div className="row" key={b.id} style={{ padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
              <span>[Gép] {b.name} ({b.totalCost?.toLocaleString("hu-HU")} → {b.soldPrice?.toLocaleString("hu-HU")} Ft)</span>
              <strong className={pr >= 0 ? "green" : "red"}>{pr >= 0 ? "+" : ""}{pr.toLocaleString("hu-HU")} Ft</strong>
            </div>
          );
        })}
        {soldSoloParts.map((p) => {
          const pr = (p.soldPrice || 0) - (p.purchasePrice || 0);
          return (
            <div className="row" key={p.id} style={{ padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
              <span>{p.name} ({p.purchasePrice?.toLocaleString("hu-HU")} → {p.soldPrice?.toLocaleString("hu-HU")} Ft)</span>
              <strong className={pr >= 0 ? "green" : "red"}>{pr >= 0 ? "+" : ""}{pr.toLocaleString("hu-HU")} Ft</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}
