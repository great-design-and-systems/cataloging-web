import ApiClear from '../actions/api/ApiClear.js';
import ApiGet from '../actions/api/ApiGet.js';
import ApiQuery from '../actions/api/ApiQuery.js';
import ApiRemove from '../actions/api/ApiRemove.js';
import ApiSave from '../actions/api/ApiSave.js';
import BooksList from './books/BooksList';
import BooksSetList from './books/BooksSetList';
import DrawerToggle from '../actions/drawer/DrawerToggle.js';
import HeadersControlsReset from './headers-controls/HeadersControlsReset';
import HeadersControlsSet from './headers-controls/HeadersControlsSet';
import { push as RouterPush } from 'react-router-redux';
import SearchSetQuery from './search/SearchSetQuery';
import ToolbarHide from './toolbar/ToolbarHide';
import ToolbarShow from './toolbar/ToolbarShow';
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
  ViewFilterGrid,
  HeadersControlsSet,
  HeadersControlsReset,
  ToolbarHide,
  ToolbarShow,
  SearchSetQuery,
  BooksList,
  BooksSetList
};
module.exports = actions;
