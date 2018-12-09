import {combineReducers} from 'redux';
import nutrientsDefault from './reducer_nutrientsDefault';
import nutrientsInfo from './reducer_actionListener';

const allReducers = combineReducers({ //combining reducers in one
    nutrients: nutrientsInfo,
    nutDefault: nutrientsDefault
});

export default allReducers;                   //exporting all reducers