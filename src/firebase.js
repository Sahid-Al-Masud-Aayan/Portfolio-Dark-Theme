// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdj08gFasynhubz0307TkEQMwX-QEHxa8",
  authDomain: "my-portfolio-ff3b5.firebaseapp.com",
  projectId: "my-portfolio-ff3b5",
  storageBucket: "my-portfolio-ff3b5.firebasestorage.app",
  messagingSenderId: "811364118582",
  appId: "1:811364118582:web:939ce4298a783715a2e897",
  measurementId: "G-LDXWGG3Z0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const mainFirebaseData = getDatabase(app)

export const db = getDatabase(app);