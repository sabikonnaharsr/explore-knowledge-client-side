// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy4KH5Q8cfqyJTfw70u9KhKELROHZKmD0",
  authDomain: "router-firebase-assignments-10.firebaseapp.com",
  projectId: "router-firebase-assignments-10",
  storageBucket: "router-firebase-assignments-10.appspot.com",
  messagingSenderId: "1095050233448",
  appId: "1:1095050233448:web:aaf4071c58644d67db5ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);