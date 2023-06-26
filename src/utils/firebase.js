// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfs9fOJ0J4KTg89c74bVfN8Fc9pS8QLiU",
  authDomain: "gestor-nomina.firebaseapp.com",
  projectId: "gestor-nomina",
  storageBucket: "gestor-nomina.appspot.com",
  messagingSenderId: "69508085609",
  appId: "1:69508085609:web:0defee84f7060705a5aff8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }