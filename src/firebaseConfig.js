// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx9rS0wGine0sKt1k1ye0vTQjfv_FCfc0",
  authDomain: "bulk-certificate-generat-2b426.firebaseapp.com",
  projectId: "bulk-certificate-generat-2b426",
  storageBucket: "bulk-certificate-generat-2b426.appspot.com",
  messagingSenderId: "386913889191",
  appId: "1:386913889191:web:0489d143876384bbbba482",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(
  app,
  "gs://bulk-certificate-generat-2b426.appspot.com"
);
