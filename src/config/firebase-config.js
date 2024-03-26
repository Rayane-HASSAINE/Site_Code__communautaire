import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCx1HwyyB3l_zINJQan8YLE7MnPeRQu2ng",
  authDomain: "codersmonkey-2-c3e40.firebaseapp.com",
  projectId: "codersmonkey-2-c3e40",
  storageBucket: "codersmonkey-2-c3e40.appspot.com",
  messagingSenderId: "674016310480",
  appId: "1:674016310480:web:e382c1a12eb1d1cf6a1ad5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
