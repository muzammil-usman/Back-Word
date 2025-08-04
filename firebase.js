import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiMkNaTEFEoiirPskCc66JDVkaU3m_gqg",
  authDomain: "back-word.firebaseapp.com",
  projectId: "back-word",
  storageBucket: "back-word.firebasestorage.app",
  messagingSenderId: "323075811643",
  appId: "1:323075811643:web:d58ff241d87c6dadd9af1e",
  measurementId: "G-NF8H8TM1LX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword };
