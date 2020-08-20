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
axios.defaults.baseURL = 'http://localhost:8080/v1';

ReactDOM.render(
    <Auth0Provider
        // FIXME config it
        domain="packingcheck.auth0.com"
        // FIXME config it
        clientId="e56qkqH674o9j7KafIsGZtKB3veh7vTl"
        redirectUri={window.location.origin}
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
