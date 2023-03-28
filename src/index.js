import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js';

console.log("Start");
let keycloak = new Keycloak('./resources/keycloak.json');
console.log("Keycloak init");

keycloak.init({ onLoad: 'login-required' }).then(() => {
    console.log("Inside console log");
    ReactDOM.render(
        console.log("App initiated"),
        <App keycloak={keycloak} />,
        document.getElementById('root')
    );
});