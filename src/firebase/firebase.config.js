// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Kxs6uirofHLHRMlpG-N0-PWy7qhYT1w",
  authDomain: "router-firebase-assignme-518f8.firebaseapp.com",
  projectId: "router-firebase-assignme-518f8",
  storageBucket: "router-firebase-assignme-518f8.appspot.com",
  messagingSenderId: "811270078490",
  appId: "1:811270078490:web:89cd25ce7674002c9951a3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);