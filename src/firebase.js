import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from  "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDaOgvXwArjEr3GcB_qmdBLQaAdG00QMn8",
  authDomain: "portfolio-react-6304d.firebaseapp.com",
  projectId: "portfolio-react-6304d",
  storageBucket: "portfolio-react-6304d.appspot.com",
  messagingSenderId: "34621244260",
  appId: "1:34621244260:web:f228fe5d0a150ba6e2b071",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);