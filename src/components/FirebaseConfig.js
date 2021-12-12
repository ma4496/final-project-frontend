// Import the functions you need from the SDKs you need
// TODO: add env variables
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "final-project-9841d.firebaseapp.com",
  projectId: "final-project-9841d",
  storageBucket: "final-project-9841d.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
