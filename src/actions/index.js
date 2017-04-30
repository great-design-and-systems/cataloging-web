import ApiClear from '../actions/api/ApiClear.js';
import ApiGet from '../actions/api/ApiGet.js';
import ApiQuery from '../actions/api/ApiQuery.js';
import ApiRemove from '../actions/api/ApiRemove.js';
import ApiSave from '../actions/api/ApiSave.js';
import DrawerToggle from '../actions/drawer/DrawerToggle.js';
import { push as RouterPush } from 'react-router-redux';
import ViewFilterGrid from './view-filter/ViewFilterGrid';
import ViewFilterList from './view-filter/ViewFilterList';
import ViewFilterTable from './view-filter/ViewFilterTable';

const actions = {
  ApiClear,
  ApiGet,
  ApiQuery,
  ApiRemove,
  ApiSave,
  DrawerToggle,
  RouterPush,
  ViewFilterList,
  ViewFilterTable,
  ViewFilterGrid
};
module.exports = actions;
