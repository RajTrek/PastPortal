
// src/projectpastportal/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// ✅ Step 1: Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBRG2tapLanRqIBOjukuacO-HmpQx1Xu1w",
  authDomain: "pastportalsapp-ffbbc.firebaseapp.com",
  projectId: "pastportalsapp-ffbbc",
  storageBucket: "pastportalsapp-ffbbc.appspot.com",
  messagingSenderId: "772126168643",
  appId: "1:772126168643:web:e43c630a013d5fa34026f6"
};

// ✅ Step 2: Initialize app BEFORE calling getAuth()
const app = initializeApp(firebaseConfig);

// ✅ Step 3: Then safely get auth and providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// ✅ Step 4: Export them
export { auth, googleProvider, facebookProvider };
