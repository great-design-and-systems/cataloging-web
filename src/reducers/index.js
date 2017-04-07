/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */

import ApiService from './ApiService';
import Drawer from './Drawer';
import NewEntry from './NewEntry';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import {routerReducer as routing} from 'react-router-redux';

const reducers = {
  Drawer,
  ApiService,
  routing,
  NewEntry,
  form
};
const combined = combineReducers(reducers);
export default combined;
