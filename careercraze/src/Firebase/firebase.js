// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9Jk3gVXOtaTmESNr6u2Pl25frW1HTb8",
  authDomain: "careercraze-58d6a.firebaseapp.com",
  projectId: "careercraze-58d6a",
  storageBucket: "careercraze-58d6a.firebasestorage.app",
  messagingSenderId: "54628640848",
  appId: "1:54628640848:web:f9383aa9da43cd1f320955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };