// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
  authDomain: "twitter-clone-4076c.firebaseapp.com",
  projectId: "twitter-clone-4076c",
  storageBucket: "twitter-clone-4076c.appspot.com",
  messagingSenderId: "480939525195",
  appId: "1:480939525195:web:b9a57ee73fdd2cddd6f9ce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
