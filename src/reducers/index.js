import ApiService from './ApiService';
import Books from './Books';
import Drawer from './Drawer';
import HeadersControls from './HeadersControls';
import NewEntry from './NewEntry';
import Search from './Search';
import Toolbar from './Toolbar';
import ViewFilter from './ViewFilter';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux';

const reducers = {
  Drawer,
  ApiService,
  routing,
  NewEntry,
  form,
  ViewFilter,
  HeadersControls,
  Toolbar,
  Search,
  Books
};
const combined = combineReducers(reducers);
export default combined;
