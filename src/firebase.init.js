// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhogRRfAPTgrHMJCDRf5HhTiKkeMeMkqE",
  authDomain: "independant-service-provider.firebaseapp.com",
  projectId: "independant-service-provider",
  storageBucket: "independant-service-provider.appspot.com",
  messagingSenderId: "860487663539",
  appId: "1:860487663539:web:7d8950fad7687205ae55c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;