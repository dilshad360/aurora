import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <NavBar/>
    <App />
    <Footer/>
    </HashRouter>
  </React.StrictMode>
);


