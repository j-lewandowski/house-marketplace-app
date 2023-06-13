import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GEOCODE_API_KEY,
  authDomain: 'house-marketplace-app-17c9c.firebaseapp.com',
  projectId: 'house-marketplace-app-17c9c',
  storageBucket: 'house-marketplace-app-17c9c.appspot.com',
  messagingSenderId: '906004937505',
  appId: '1:906004937505:web:e9a3e3e9fa326ec4d61c60',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
