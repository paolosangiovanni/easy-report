import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Importa App senza estensione
import './index.css';
import reportWebVitals from './reportWebVitals';

// Renderizza l'app senza il BrowserRouter qui, lascia il RouterProvider in App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
