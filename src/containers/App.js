/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */

import {
  ApiClear,
  ApiGet,
  ApiQuery,
  ApiRemove,
  ApiSave,
  DrawerToggle,
} from '../actions/';
import React, {
  Component,
  PropTypes,
} from 'react';

import Main from '../components/App';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, Drawer, ApiService} = this.props;
    return <Main actions={actions} Drawer={Drawer} ApiService={ApiService}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    ApiClear: PropTypes.func.isRequired,
    ApiGet: PropTypes.func.isRequired,
    ApiQuery: PropTypes.func.isRequired,
    ApiRemove: PropTypes.func.isRequired,
    ApiSave: PropTypes.func.isRequired,
    DrawerToggle: PropTypes.func.isRequired
  }),
  Drawer: PropTypes.shape({}),
  ApiService: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    Drawer: state.Drawer,
    ApiService: state.ApiService
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    ApiClear,
    ApiGet,
    ApiQuery,
    ApiRemove,
    ApiSave,
    DrawerToggle
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
