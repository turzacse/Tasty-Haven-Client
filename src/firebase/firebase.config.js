// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIrF7J5FfRho09EMgL23k_HvBEXO8RPao",
  authDomain: "tasty-haven.firebaseapp.com",
  projectId: "tasty-haven",
  storageBucket: "tasty-haven.appspot.com",
  messagingSenderId: "948621982847",
  appId: "1:948621982847:web:f222fc049c485818b4134a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);