import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppShell from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>,
  root
);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}



reportWebVitals();