import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeAxZdrdC5Ckyudbb7qjX-AW4U8DSgEWQ',
  authDomain: 'burgerqueen-1d9a5.firebaseapp.com',
  projectId: 'burgerqueen-1d9a5',
  storageBucket: 'burgerqueen-1d9a5.appspot.com',
  messagingSenderId: '774027320411',
  appId: '1:774027320411:web:09a3892165c36a7eac337e'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);