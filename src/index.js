import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
//require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <NotificationContainer />
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
