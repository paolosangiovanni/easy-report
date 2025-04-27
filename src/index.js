import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa il nuovo componente App
import './index.css'; // Aggiungi il tuo file CSS globale
import reportWebVitals from './reportWebVitals';

// Renderizza l'app con il RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
