import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAuNsYEp5MGfJ7lAX2qAG-ZzkiDtOPilCk',
  authDomain: 'bqra-166dc.firebaseapp.com',
  projectId: 'bqra-166dc',
  storageBucket: 'bqra-166dc.appspot.com',
  messagingSenderId: '711622033791',
  appId: '1:711622033791:web:5fa0f67748ffa3a0acda4a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged } from 'firebase/auth';
export { getDoc, doc } from 'firebase/firestore';
export async function signInAccount(email, pass) {
  await signInWithEmailAndPassword(auth, email, pass);
}
