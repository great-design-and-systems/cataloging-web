import ApiServiceReducer from '../../api/js/ApiServiceReducer';
import { combineReducers } from 'redux';

const AppReducers = combineReducers({
    api: ApiServiceReducer
});