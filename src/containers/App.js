import {
  ApiClear,
  ApiGet,
  ApiQuery,
  ApiRemove,
  ApiSave,
} from '../actions/';
/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes,
} from 'react';

import Main from '../components/app/App';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const { actions, ApiService } = this.props;
    return <Main actions={actions} ApiService={ApiService} />;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    ApiSave: PropTypes.func.isRequired,
    ApiRemove: PropTypes.func.isRequired,
    ApiGet: PropTypes.func.isRequired,
    ApiQuery: PropTypes.func.isRequired,
    ApiClear: PropTypes.func.isRequired
  }),
  ApiService: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    ApiService: state.ApiService
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    ApiSave,
    ApiRemove,
    ApiGet,
    ApiQuery,
    ApiClear
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
