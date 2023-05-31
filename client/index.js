import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './src/redux/store.js';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
