import ApiClear from '../actions/api/ApiClear.js';
import ApiGet from '../actions/api/ApiGet.js';
import ApiQuery from '../actions/api/ApiQuery.js';
import ApiRemove from '../actions/api/ApiRemove.js';
import ApiSave from '../actions/api/ApiSave.js';
/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import DrawerToggle from '../actions/drawer/DrawerToggle.js';
const actions = {
  ApiClear,
  ApiGet,
  ApiQuery,
  ApiRemove,
  ApiSave,
  DrawerToggle
};
module.exports = actions;
