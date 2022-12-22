import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYG1nFNszLyGv92TMTfGDX5ySmG7BzlVM",
  authDomain: "coderhouse-34840.firebaseapp.com",
  projectId: "coderhouse-34840",
  storageBucket: "coderhouse-34840.appspot.com",
  messagingSenderId: "854888755567",
  appId: "1:854888755567:web:1856a2f49813178af8f89a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);