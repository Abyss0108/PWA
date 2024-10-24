import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<<<<<<< Updated upstream
//import * as serviceWorkerRegistration from './ServiceWorkerRegistration'; 
=======
>>>>>>> Stashed changes

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes


reportWebVitals();
