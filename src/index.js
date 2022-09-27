import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyClFUmaYkw9I5L4Klj9SnRarhCGniiBT2c",
//   authDomain: "ecommerce-alexis.firebaseapp.com",
//   projectId: "ecommerce-alexis",
//   storageBucket: "ecommerce-alexis.appspot.com",
//   messagingSenderId: "894384810603",
//   appId: "1:894384810603:web:4c4eb9e2944658aff69f2e"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
