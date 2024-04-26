// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAROm2NLIkhehaFR8vGz62rxYMuQbhO8Fc",
  authDomain: "craftopia-3ee2f.firebaseapp.com",
  projectId: "craftopia-3ee2f",
  storageBucket: "craftopia-3ee2f.appspot.com",
  messagingSenderId: "1066468826126",
  appId: "1:1066468826126:web:d9ce6e9d7c1422f599b05f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;