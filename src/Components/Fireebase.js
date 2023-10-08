// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTdXqiqQuICCbMoh1_5X6E-seyvsJ43GE",
  authDomain: "assignment-9-event-manag-152c1.firebaseapp.com",
  projectId: "assignment-9-event-manag-152c1",
  storageBucket: "assignment-9-event-manag-152c1.appspot.com",
  messagingSenderId: "87046758165",
  appId: "1:87046758165:web:7f312c3920460a5905531c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
