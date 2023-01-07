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
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <App />
  </>
);

reportWebVitals();
