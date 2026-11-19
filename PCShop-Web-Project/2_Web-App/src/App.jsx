// VAPID: BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w

import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, onSnapshot, orderBy, query, setDoc, serverTimestamp } from "firebase/firestore";
import { getToken } from "firebase/messaging";
import { Package, Wrench, Wallet, Flame, LogOut, Cpu, ShieldCheck } from "lucide-react";
import { auth, db, getMessagingSafe } from "./firebase";
import InventoryTab from "./components/InventoryTab";
import BuilderTab from "./components/BuilderTab";
import FinanceTab from "./components/FinanceTab";
import DealHunterTab from "./components/DealHunterTab";
import WarrantyTab from "./components/WarrantyTab";

const ALLOWED_EMAILS = [
  "fabianbal500@gmail.com",
  "beastmaster0626@gmail.com"
];

const VAPID_KEY = "BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w";

export default function App() {
  const [cardExpenses, setCardExpenses] = useState([]);
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [manualSales, setManualSales] = useState([]);
  const [warrantyItems, setWarrantyItems] = useState([]);
  const [warrantyComplaints, setWarrantyComplaints] = useState([]);

  const [tab, setTab] = useState("inventory");
  const [parts, setParts] = useState([]);
  const [builds, setBuilds] = useState([]);
  const [dealWatches, setDealWatches] = useState([]);
  const [foundDeals, setFoundDeals] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u && ALLOWED_EMAILS.includes((u.email || "").toLowerCase())) {
        setUser(u);
        await registerPushToken(u.email.toLowerCase());
      } else {
        setUser(null);
      }
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;

    const u1 = onSnapshot(query(collection(db, "parts"), orderBy("createdAt", "desc")), (snap) => {
      setParts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u2 = onSnapshot(query(collection(db, "builds"), orderBy("createdAt", "desc")), (snap) => {
      setBuilds(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u3 = onSnapshot(query(collection(db, "deal_watches"), orderBy("createdAt", "desc")), (snap) => {
      setDealWatches(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u4 = onSnapshot(query(collection(db, "found_deals"), orderBy("foundAt", "desc")), (snap) => {
      setFoundDeals(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u5 = onSnapshot(query(collection(db, "card_expenses"), orderBy("createdAt", "desc")), (snap) => {
      setCardExpenses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u6 = onSnapshot(query(collection(db, "sales_log"), orderBy("soldAt", "desc")), (snap) => {
      setManualSales(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u7 = onSnapshot(query(collection(db, "warranty_items"), orderBy("soldAt", "desc")), (snap) => {
      setWarrantyItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const u8 = onSnapshot(query(collection(db, "warranty_complaints"), orderBy("createdAt", "desc")), (snap) => {
      setWarrantyComplaints(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => { u1(); u2(); u3(); u4(); u5(); u6(); u7(); u8(); };
  }, [user]);

  async function registerPushToken(userEmail) {
    try {
      if (!("Notification" in window)) return;
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return;

      const messaging = await getMessagingSafe();
      if (!messaging || !VAPID_KEY || VAPID_KEY === "BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w") return;

      const swReg = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
      const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swReg });
      if (token) {
        const docId = userEmail.replace(/[^a-z0-9]/g, "_");
        await setDoc(doc(db, "device_tokens", docId), {
          email: userEmail,
          token,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
    } catch (_) {}
  }

  async function handleLogin(e) {
    e.preventDefault();
    setAuthError("");
    const clean = email.trim().toLowerCase();
    if (!ALLOWED_EMAILS.includes(clean)) {
      setAuthError("Ez az e-mail cím nincs engedélyezve.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, clean, password);
    } catch {
      setAuthError("Hibás e-mail vagy jelszó.");
    }
  }

  if (!authReady) return null;

  if (!user) {
    return (
      <div style={{ maxWidth: 380, margin: "80px auto", padding: 16 }}>
        <form className="card" onSubmit={handleLogin}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <Cpu size={40} color="#3b82f6" />
            <h2 style={{ margin: "8px 0 4px" }}>PC Bolt Manager</h2>
            <div className="muted">Zártkörű Webes Készlet & Deal Hunter</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input type="email" placeholder="E-mail cím" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Jelszó" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {authError && <div className="red" style={{ fontSize: 13 }}>{authError}</div>}
            <button className="btn" type="submit" style={{ justifyContent: "center", padding: 11 }}>Belépés</button>
          </div>
        </form>
      </div>
    );
  }

  const navItems = [
    { id: "inventory", label: "Készlet", icon: Package },
    { id: "builder", label: "Gépépítő", icon: Wrench },
    { id: "finance", label: "Pénzügy", icon: Wallet },
    { id: "warranty", label: "Garancia", icon: ShieldCheck },
    { id: "deals", label: "Deal Hunter", icon: Flame }
  ];

  return (
    <div className="app-shell">
      <aside className="desktop-sidebar">
        <div className="row" style={{ marginBottom: 12 }}>
          <strong style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Cpu size={20} color="#3b82f6" /> PC Bolt
          </strong>
          <button className="btn btn-ghost" style={{ padding: 6 }} onClick={() => signOut(auth)} title="Kilépés">
            <LogOut size={16} />
          </button>
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)}>
              <Icon size={18} /> {item.label}
            </button>
          );
        })}
      </aside>

      <main className="main-content">
        {tab === "inventory" && <InventoryTab parts={parts} userEmail={user.email} />}
        {tab === "builder" && <BuilderTab parts={parts} builds={builds} />}
        {tab === "finance" && (
          <FinanceTab
            parts={parts}
            builds={builds}
            cardExpenses={cardExpenses}
            manualSales={manualSales}
            warrantyComplaints={warrantyComplaints}
            userEmail={user.email}
          />
        )}
        {tab === "warranty" && (
          <WarrantyTab
            parts={parts}
            builds={builds}
            warrantyItems={warrantyItems}
            warrantyComplaints={warrantyComplaints}
            userEmail={user.email}
          />
        )}
        {tab === "deals" && <DealHunterTab dealWatches={dealWatches} foundDeals={foundDeals} />}
      </main>

      <nav className="mobile-bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)}>
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
