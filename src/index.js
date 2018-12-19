import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';          //function  createStore

import allReducers from './reducers/reducer_rootReducer'; // importing all reducers for store

const store = createStore(allReducers);     // creating store
                                            //  pasing store as props
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>

    , document.getElementById('root')
);


serviceWorker.unregister();
