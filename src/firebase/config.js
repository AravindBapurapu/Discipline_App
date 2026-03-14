// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyBBOiSJcSRu66dFpvg2sjyvmTwph06hLPA",
  authDomain: "discipline-tracker-97ff4.firebaseapp.com",
  projectId: "discipline-tracker-97ff4",
  storageBucket: "discipline-tracker-97ff4.firebasestorage.app",
  messagingSenderId: "281734238282",
  appId: "1:281734238282:web:0362caa2f04309e22d16b3",
  measurementId: "G-VW62YSB21G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create and export the services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBBOiSJcSRu66dFpvg2sjyvmTwph06hLPA",
//   authDomain: "discipline-tracker-97ff4.firebaseapp.com",
//   projectId: "discipline-tracker-97ff4",
//   storageBucket: "discipline-tracker-97ff4.firebasestorage.app",
//   messagingSenderId: "281734238282",
//   appId: "1:281734238282:web:0362caa2f04309e22d16b3",
//   measurementId: "G-VW62YSB21G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);