// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn2ZfQO0p8GqHI99Le2svRmoVgBBVIXro",
  authDomain: "curso-react-js---coderhouse.firebaseapp.com",
  projectId: "curso-react-js---coderhouse",
  storageBucket: "curso-react-js---coderhouse.appspot.com",
  messagingSenderId: "743347378966",
  appId: "1:743347378966:web:fee824b5fdf8c993c9ce37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;