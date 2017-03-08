import AppMiddleware from './middleware';
import AppReducers from './reducers';
import { createStore } from 'redux';

const AppStores = createStore(AppReducers, AppMiddleware);