import { combineReducers } from 'redux';
import nutrientsDefault from './reducer_nutrientsDefault';
import nutrientsInfo from './reducer_actionListener';
import { routerReducer } from "react-router-redux";

const allReducers = combineReducers({ //combining reducers in one
    routing: routerReducer,
    nutrients: nutrientsInfo,
    nutDefault: nutrientsDefault
});

export default allReducers;                   //exporting all reducers