import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './start files/reportWebVitals';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: 10px;
    background: rgb(0, 89, 255);
  }

  body::-webkit-scrollbar-track {
    color: inherit;
  }

  body::-webkit-scrollbar-thumb {
    width: 100%
    height: 1px;
    background: aqua;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <App />
  </>
);

reportWebVitals();
