
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAQzc9eygCvMO-_fL8s0NSNPxtIvYQb3x0",
  authDomain: "portfolio-website-73eba.firebaseapp.com",
  projectId: "portfolio-website-73eba",
  storageBucket: "portfolio-website-73eba.appspot.com",
  messagingSenderId: "389898838741",
  appId: "1:389898838741:web:aec637c1071f528f83f85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);