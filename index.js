import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Import all CSS files
import './assets/css/all.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
// import './assets/css/venobox.min.css';
import './assets/css/responsive.css';
import './assets/css/default.css';
import './assets/css/fontawesome.css';
import './assets/css/nice-select.css';
import App from './App';
import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
