import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAwPTVbfH3pf03KKcbzZz7QSB9hI6gn3k',
  authDomain: 'test-7cacf.firebaseapp.com',
  projectId: 'test-7cacf',
  storageBucket: 'test-7cacf.appspot.com',
  messagingSenderId: '377820144999',
  appId: '1:377820144999:web:d4d39ca27cb111395cbbc2',
  measurementId: 'G-3BFYNTPFCF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
