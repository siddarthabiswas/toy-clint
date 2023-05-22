import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjdRpEcxnFNPVM8HshHnBUbDQrifNW3WM",
    authDomain: "simple-firebase2-4fe6e.firebaseapp.com",
    projectId: "simple-firebase2-4fe6e",
    storageBucket: "simple-firebase2-4fe6e.appspot.com",
    messagingSenderId: "357521187160",
    appId: "1:357521187160:web:b96cc4c60263cfb132052d"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);