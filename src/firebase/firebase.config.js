// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4MLpJLPAryIxM8oB1QBfgWNPk0AGeqDY",
  authDomain: "m52-dragon-news.firebaseapp.com",
  projectId: "m52-dragon-news",
  storageBucket: "m52-dragon-news.firebasestorage.app",
  messagingSenderId: "960127329972",
  appId: "1:960127329972:web:a953bcb57ae6da66a199e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;