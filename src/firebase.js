// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsxFu-hfOZ_7dB-p0OhGauxjJiI6ZsAM8",
  authDomain: "diplom-597c7.firebaseapp.com",
  projectId: "diplom-597c7",
  storageBucket: "diplom-597c7.appspot.com",
  messagingSenderId: "244786531062",
  appId: "1:244786531062:web:61586c18b742e01360fad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categories = database.ref( db,"categories");