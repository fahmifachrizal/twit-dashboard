// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdySqopLMK5rGh8J5G2_sSRPJgHmski4",
  authDomain: "twit-dashboard.firebaseapp.com",
  projectId: "twit-dashboard",
  storageBucket: "twit-dashboard.appspot.com",
  messagingSenderId: "323574773953",
  appId: "1:323574773953:web:b47aa996846fe839a03c40",
  measurementId: "G-H4JM4W842Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = app;
export const firebaseAnalytics = getAnalytics(app);