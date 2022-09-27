import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClFUmaYkw9I5L4Klj9SnRarhCGniiBT2c",
  authDomain: "ecommerce-alexis.firebaseapp.com",
  projectId: "ecommerce-alexis",
  storageBucket: "ecommerce-alexis.appspot.com",
  messagingSenderId: "894384810603",
  appId: "1:894384810603:web:4c4eb9e2944658aff69f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);