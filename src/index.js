import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './components/context/CartContext';



const firebaseConfig = {
  apiKey: "AIzaSyBRBUKv610lfg323CAffe3zWVWp9xKNdNs",
  authDomain: "cinelife-e53cd.firebaseapp.com",
  projectId: "cinelife-e53cd",
  storageBucket: "cinelife-e53cd.appspot.com",
  messagingSenderId: "496327940551",
  appId: "1:496327940551:web:eb47bce9313ba6cce2a1e2",
  measurementId: "G-08FCVVLSLL"
};
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>

  </React.StrictMode>
);

reportWebVitals();
