import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {Auth0Provider} from "@auth0/auth0-react";

// FIXME config it
// https://packingcheck-api-lite.firebaseio.com/
// axios.defaults.baseURL = 'http://my-json-server.typicode.com/nanfang/fakejson';
const API_URL = 'http://localhost:8080/v1';
const API_IDENTIFIER = 'https://api.packingcheck.com/';
const DOMAIN = "packingcheck.auth0.com";
axios.defaults.baseURL = API_URL

ReactDOM.render(
    <Auth0Provider
        domain={DOMAIN}
        // FIXME config it
        clientId="e56qkqH674o9j7KafIsGZtKB3veh7vTl"
        redirectUri={window.location.origin}
        audience={API_IDENTIFIER}
        scope="read:all update:all"
    >
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
