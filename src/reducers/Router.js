/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
  ROUTER_GO_TO,
} from '../actions/const';
import createHistory from 'history/createBrowserHistory';

const initialState = {
  history: createHistory()
};
function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case ROUTER_GO_TO:
      console.log('browser', state.history);
      state.history.push(action.payload.path, action.payload.params || {});
      return state;
    default:
      {
        /* Return original state if no actions were consumed. */
        return state;
      }
  }
}

module.exports = reducer;