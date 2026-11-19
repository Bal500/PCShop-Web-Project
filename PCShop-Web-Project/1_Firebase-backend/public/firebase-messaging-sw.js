import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAto_nGW6s0pEdDZ2RmkXAjrU3x_oL3etA",
  authDomain: "pcshop-web-manager.firebaseapp.com",
  projectId: "pcshop-web-manager",
  storageBucket: "pcshop-web-manager.firebasestorage.app",
  messagingSenderId: "243721610856",
  appId: "1:243721610856:web:67c6a703252b6bc472bddd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Deal Hunter";
  const body = payload.notification?.body || "Új kedvező ajánlat érkezett.";
  const url = payload.data?.url || "/";

  self.registration.showNotification(title, {
    body,
    data: { url }
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.url;
  if (targetUrl) {
    event.waitUntil(clients.openWindow(targetUrl));
  }
});
