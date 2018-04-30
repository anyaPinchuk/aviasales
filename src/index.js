import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './stores/configureStore';

require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize.min.js');

let store = configureStore();

render((
    <Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();