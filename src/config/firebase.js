import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApzcPjt4AypeXnVHmk63ennZSCpNwFPjI",
  authDomain: "home-rental-b8d51.firebaseapp.com",
  projectId: "home-rental-b8d51",
  storageBucket: "home-rental-b8d51.appspot.com",
  messagingSenderId: "489406925742",
  appId: "1:489406925742:web:c62ce8f9b103039d4a163f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
