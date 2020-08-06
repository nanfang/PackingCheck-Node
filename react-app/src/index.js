import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'http://my-json-server.typicode.com/nanfang/fakejson';
axios.defaults.baseURL = 'http://localhost:8080/v1';
// https://packingcheck-api-lite.firebaseio.com/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
