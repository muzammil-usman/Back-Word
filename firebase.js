// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiMkNaTEFEoiirPskCc66JDVkaU3m_gqg",
  authDomain: "back-word.firebaseapp.com",
  projectId: "back-word",
  storageBucket: "back-word.firebasestorage.app",
  messagingSenderId: "323075811643",
  appId: "1:323075811643:web:d58ff241d87c6dadd9af1e",
  measurementId: "G-NF8H8TM1LX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
