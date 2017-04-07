import ApiClear from '../actions/api/ApiClear.js';
import ApiGet from '../actions/api/ApiGet.js';
import ApiQuery from '../actions/api/ApiQuery.js';
import ApiRemove from '../actions/api/ApiRemove.js';
import ApiSave from '../actions/api/ApiSave.js';
import DrawerToggle from '../actions/drawer/DrawerToggle.js';
import { push as RouterPush } from 'react-router-redux';

const actions = {
  ApiClear,
  ApiGet,
  ApiQuery,
  ApiRemove,
  ApiSave,
  DrawerToggle,
  RouterPush
};
module.exports = actions;
