// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
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

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');