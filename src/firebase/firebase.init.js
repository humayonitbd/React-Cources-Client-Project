// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC7mU8zXpLBCpwoZmtPuz1hf6SqTlkPmE",
  authDomain: "programming-courses-project.firebaseapp.com",
  projectId: "programming-courses-project",
  storageBucket: "programming-courses-project.appspot.com",
  messagingSenderId: "89114891618",
  appId: "1:89114891618:web:d602a55aac2af969ea483b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;