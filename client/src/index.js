import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from './app';
import './style.css';
import ContextProvider from './context/authContext';

const options = {
  timeout: 2000,
  position: positions.BOTTOM_RIGHT,
};

render(
  <Router>
    <ContextProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </ContextProvider>
  </Router>,
  document.getElementById('root')
);
