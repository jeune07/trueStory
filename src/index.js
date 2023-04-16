import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/header.css';
import App from './App';
import {Header} from "./header/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header/>
    <App />
  
  </React.StrictMode>
);


