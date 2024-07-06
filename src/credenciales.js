// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvDysQzMUd6X1yCYZO4TpZY-Ik1g4dw0",
  authDomain: "rentalap-login.firebaseapp.com",
  projectId: "rentalap-login",
  storageBucket: "rentalap-login.appspot.com",
  messagingSenderId: "157021918845",
  appId: "1:157021918845:web:a40547fae0cf0609580314"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;