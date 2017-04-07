import ApiMiddleware from './ApiMiddleware';
import { applyMiddleware } from 'redux';
import {browserHistory} from 'react-router';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

const AppRouterMiddleware = routerMiddleware(browserHistory);
const AppMiddleware = applyMiddleware(thunk, ApiMiddleware, AppRouterMiddleware);

export default AppMiddleware;
