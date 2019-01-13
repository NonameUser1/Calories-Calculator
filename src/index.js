import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';          //function  createStore

import allReducers from './reducers/reducer_rootReducer'; // importing all reducers for store

import firebase from './firebase';     // firebase instance?

const storE = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());     // creating store
                                            //  pasing store as props

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('user check: user in');
         storE.dispatch({
             type: 'ON_LOAD_USER_CHECK',
             payload: {
                 authorized: true
             }
         });
    } else {
        console.log('user check: user out');
        storE.dispatch({
            type: 'ON_LOAD_USER_CHECK',
            payload: {
                authorized: false,
                currentUser: null
            }
        });
    }
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={storE}>
                <App/>
            </Provider>
        </BrowserRouter>

        , document.getElementById('root')
    );
});


serviceWorker.unregister();
