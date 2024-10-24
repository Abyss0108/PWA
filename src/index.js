import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppShell from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Importa el archivo del service worker

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>,
  root
);

// Registrar el service worker
//serviceWorkerRegistration.register(); 

reportWebVitals();