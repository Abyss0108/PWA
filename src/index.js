import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as serviceWorkerRegistration from './ServiceWorkerRegistration'; 

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// Registro del Service Worker para modo offline
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    // Lógica para manejar actualizaciones del Service Worker
    if (window.confirm("Nueva versión disponible. ¿Deseas actualizar?")) {
      // Recarga la página para que la nueva versión sea visible
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  },
  onSuccess: (registration) => {
    console.log("Service Worker registrado exitosamente:", registration);
  }
});

reportWebVitals();
