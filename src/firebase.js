// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDX2QcapnWu0iq_9dUi78o4IPXdw7lzG1M",
  authDomain: "bba-web-e1884.firebaseapp.com",
  projectId: "bba-web-e1884",
  storageBucket: "bba-web-e1884.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);