// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt2mMqNCSdtJW4P1Zqk0wWYZMi-TGxPI8",
    authDomain: "mockview-a8968.firebaseapp.com",
    projectId: "mockview-a8968",
    storageBucket: "mockview-a8968.firebasestorage.app",
    messagingSenderId: "765862948350",
    appId: "1:765862948350:web:57dedd3aedc42d671fe4af",
    measurementId: "G-NQ8N483T2J"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);