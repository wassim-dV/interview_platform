// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAZ7I9sxMj2_BpATE1RNWA3bN8dqNrzCg",
  authDomain: "interview-platform-89ce2.firebaseapp.com",
  projectId: "interview-platform-89ce2",
  storageBucket: "interview-platform-89ce2.firebasestorage.app",
  messagingSenderId: "469696140623",
  appId: "1:469696140623:web:eb69ab054e9a792b9ce13a",
  measurementId: "G-X6NW83SY15"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);