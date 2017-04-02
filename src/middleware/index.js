import ApiMiddleware from './ApiMiddleware';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const AppMiddleware = applyMiddleware(thunk, ApiMiddleware);
module.exports = AppMiddleware;