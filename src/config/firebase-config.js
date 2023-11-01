// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu7K_f99Tcu2FJHc0pPNMBVpqBpSUMmdk",
  authDomain: "taskflow-8fc97.firebaseapp.com",
  projectId: "taskflow-8fc97",
  storageBucket: "taskflow-8fc97.appspot.com",
  messagingSenderId: "305508823056",
  appId: "1:305508823056:web:b155f3870c3d37bfda5a95",
  measurementId: "G-67T29012RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);