// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7svdTB9k-qIyS78sdvmUXOBLFTM8AJHE",
  authDomain: "right-quiz.firebaseapp.com",
  databaseURL: "https://right-quiz-default-rtdb.firebaseio.com",
  projectId: "right-quiz",
  storageBucket: "right-quiz.appspot.com",
  messagingSenderId: "219119155760",
  appId: "1:219119155760:web:67ff12f439c0eb959f0bf5",
  measurementId: "G-LP4V87RQGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;