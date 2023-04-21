import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './start files/reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { store } from './store/index'

const Global = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: 10px;
    background: rgb(12, 54, 170);
  }

  body::-webkit-scrollbar-track {
    color: inherit;
  }

  body::-webkit-scrollbar-thumb {
    width: 100%;
    height: 1px;
    background: rgb(0, 100, 255);
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);

reportWebVitals();
