import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';

// firebase config
// mia
const firebaseConfig = {
  apiKey: 'AIzaSyBnm8YLY098eiIosSSIRlzpHEUoxYybkrk',
  authDomain: 'ch-react-44d53.firebaseapp.com',
  projectId: 'ch-react-44d53',
  storageBucket: 'ch-react-44d53.appspot.com',
  messagingSenderId: '579772739982',
  appId: '1:579772739982:web:d1eb4c0b1547c0dd3f74df',
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
