// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app


import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA1hmXGOc7hR-7nsJ80A5tMPhsVc2xm07c",
  authDomain: "axiel-chat-app-dev.firebaseapp.com",
  projectId: "axiel-chat-app-dev",
  storageBucket: "axiel-chat-app-dev.appspot.com",
  messagingSenderId: "946055889840",
  appId: "1:946055889840:web:25f9b92187b4ab2ad34c75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();