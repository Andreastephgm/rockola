import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAuuzPcc9BqTdPCZ5fvRkHCKoYwziLxHnk",
    authDomain: "rockola-75e47.firebaseapp.com",
    projectId: "rockola-75e47",
    storageBucket: "rockola-75e47.appspot.com",
    messagingSenderId: "138560977658",
    appId: "1:138560977658:web:2eee008e328abda8a82743",
    measurementId: "G-PJ3R3XSETD"
  };


 export const FIREBASE_APP = initializeApp(firebaseConfig);
 export const FIREBASE_AUTH= getAuth(FIREBASE_APP);
 export const FIRESTORE_DB= getFirestore();
 export const analytics = getAnalytics(FIREBASE_APP);