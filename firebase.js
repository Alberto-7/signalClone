// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSdpiZlO3cd2Zb34Q13QVjGkKKzV06zyM",
  authDomain: "signalclone-ab64f.firebaseapp.com",
  projectId: "signalclone-ab64f",
  storageBucket: "signalclone-ab64f.appspot.com",
  messagingSenderId: "1073354081870",
  appId: "1:1073354081870:web:5aa1b023cc674674c7651f",
};
const alreadyCreatedApps = getApps();
// Initialize Firebase
const app =
  alreadyCreatedApps.length === 0
    ? initializeApp(firebaseConfig)
    : alreadyCreatedApps[0];

const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
};
