import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './app';
import "./style/index.css"
import { Provider } from 'react-redux';
import Store from './provider/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

