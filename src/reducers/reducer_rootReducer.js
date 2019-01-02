import { combineReducers } from 'redux';
import nutrientsInfo from './reducer_actinListener';
import auth from './reducer_authentication';
import { routerReducer } from "react-router-redux";

const allReducers = combineReducers({ //combining reducers in one
    routing: routerReducer,
    nutrients: nutrientsInfo,
    auth: auth
});

export default allReducers;                   //exporting all reducers