import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import tabularData from './reducer';


const configureStore = () => {
    return createStore(
        tabularData,
        applyMiddleware(thunk)
    );
}

const store = configureStore();

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
