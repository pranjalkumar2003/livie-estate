// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "livie-estate.firebaseapp.com",
  projectId: "livie-estate",
  storageBucket: "livie-estate.appspot.com",
  messagingSenderId: "1036865739522",
  appId: "1:1036865739522:web:e19916723a0b533fdb001b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);