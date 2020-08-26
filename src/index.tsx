import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Plugins } from '@capacitor/core';
import resources from './i18n';
import * as serviceWorker from './serviceWorker';

Plugins.Device.getLanguageCode()
    .then((language) => {
        i18n.use(initReactI18next)
        .init({
            resources,
            lng: language.value,
            keySeparator: false,
            interpolation: {
                escapeValue: false
            }

        });
    })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
