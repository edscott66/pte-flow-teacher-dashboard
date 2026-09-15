// src/teacherFirebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const teacherFirebaseConfig = {
  apiKey: "AIzaSyDJ-8md77LBw33ulc8pxeTiIIQPWOF34qQ",
  authDomain: "teacher-dashboard-80e21.firebaseapp.com",
  projectId: "teacher-dashboard-80e21",
  storageBucket: "teacher-dashboard-80e21.firebasestorage.app",
  messagingSenderId: "123056854555",
  appId: "1:123056854555:web:beacce19c1dfc8a648cabe"
};

// Use a named Firebase app so the Teacher Dashboard connection
// remains explicitly separate from the existing Student App Firebase app.
const teacherApp = initializeApp(
  teacherFirebaseConfig,
  "teacher-dashboard"
);

export const teacherDb = getFirestore(teacherApp);
export const teacherAuth = getAuth(teacherApp);