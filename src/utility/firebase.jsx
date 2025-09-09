// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCnvV-dK8lipKixuFnC96x0IUyzmBL40Q",
  authDomain: "movie-gpt-6251b.firebaseapp.com",
  projectId: "movie-gpt-6251b",
  storageBucket: "movie-gpt-6251b.firebasestorage.app",
  messagingSenderId: "584048560290",
  appId: "1:584048560290:web:740a2cd69bda25c0ed2ffb",
  measurementId: "G-C80TYY11N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
