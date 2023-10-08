// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbNqXeXkX8C8fmIBqGaVXzsxkEWP1UTs",
  authDomain: "event-manegement-project.firebaseapp.com",
  projectId: "event-manegement-project",
  storageBucket: "event-manegement-project.appspot.com",
  messagingSenderId: "289926025967",
  appId: "1:289926025967:web:9d8a1d897d92d801b3411a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;