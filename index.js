import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Находим корневой элемент в index.html и рендерим в него наше приложение
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);