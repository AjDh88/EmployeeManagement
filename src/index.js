import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'demoRealm',
    clientId: 'demoReact'
});

keycloak.init({ onLoad: 'login-required' }).then(() => {
    sessionStorage.setItem('authentication', keycloak.token);
    sessionStorage.setItem('refreshToken', keycloak.refreshToken);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App keycloak={keycloak}/>
        </React.StrictMode>
    );    
});