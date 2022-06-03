// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_b_CjFIUE0E06ZpraRuCEyE9igi3Mthw",
  authDomain: "app-wine-3267d.firebaseapp.com",
  projectId: "app-wine-3267d",
  storageBucket: "app-wine-3267d.appspot.com",
  messagingSenderId: "954784946815",
  appId: "1:954784946815:web:12728b0249323cb5bcfd4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db