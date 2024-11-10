import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  initializeAnalytics,
  isSupported,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let analytics;

export const initFirebase = async () => {
  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics inicializado no navegador.");
    } else {
      console.log("Firebase Analytics não é suportado neste ambiente.");
    }
  }
};

export { analytics };
