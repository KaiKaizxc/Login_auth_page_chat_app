// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACYOCauHkPyOpqPDFTv_7A-t51hfl2Rrk",
  authDomain: "chat-d52b6.firebaseapp.com",
  projectId: "chat-d52b6",
  storageBucket: "chat-d52b6.appspot.com",
  messagingSenderId: "810612108519",
  appId: "1:810612108519:web:d711234adb38b5c39bc642",
  measurementId: "G-ZR3E8F475W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
