import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import '../index.css'
import { BrowserRouter } from "react-router-dom";
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import { store } from '../Storage/index.ts';

//importarrr
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
