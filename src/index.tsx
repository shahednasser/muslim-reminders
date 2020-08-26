import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Plugins } from '@capacitor/core';
import resources from './i18n';
import * as serviceWorker from './serviceWorker';

let direction = 'ltr';

Plugins.Device.getLanguageCode()
    .then(async (language) => {
        direction = language.value.indexOf('ar') !== -1 ? 'rtl' : 'ltr';
        i18n.use(initReactI18next)
        .init({
            resources,
            lng: language.value,
            keySeparator: false,
            interpolation: {
                escapeValue: false
            }

        });
        setDirection(direction);
    });

let directionCB: Function|null = null;

function setDirection (direction: string) {
    if (directionCB) {
        directionCB(direction);
    }
}

ReactDOM.render(<App setDirectionCB={(cb: Function) => directionCB = cb} direction={direction} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();