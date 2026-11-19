import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAto_nGW6s0pEdDZ2RmkXAjrU3x_oL3etA",
  authDomain: "pcshop-web-manager.firebaseapp.com",
  projectId: "pcshop-web-manager",
  storageBucket: "pcshop-web-manager.firebasestorage.app",
  messagingSenderId: "243721610856",
  appId: "1:243721610856:web:67c6a703252b6bc472bddd",
  measurementId: "G-ET66342BXG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, "europe-west1");

export const callHardveraproTop3 = httpsCallable(functions, "getHardveraproPrice");
export const callVintedTop3 = httpsCallable(functions, "getVintedPrice");

export async function getMessagingSafe() {
  if (await isSupported()) {
    return getMessaging(app);
  }
  return null;
}
