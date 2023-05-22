import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNiN6hfGCA8Y5xpdHj1JGR1sxfGci9EGQ",
    authDomain: "toyprojrct.firebaseapp.com",
    projectId: "toyprojrct",
    storageBucket: "toyprojrct.appspot.com",
    messagingSenderId: "43374783859",
    appId: "1:43374783859:web:8c2599ff0231516641a906"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);