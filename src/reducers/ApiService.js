/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import { Api } from '../services/ApiService';
import lodash from 'lodash';

const initialState = {
  error: null
};

const DEFAULT_STATE = {
  error: null,
  pending: false
};

function reducer(state = initialState, action) {
  let domainState;
  const api = new Api();
  state = { ...state };
  if (action.payload && action.payload.domain) {
    const domain = action.payload.domain.replace(/\s/, '_');
    const executable = { ...initialState };
    domainState = {};
    lodash.set(domainState, action.payload.executable, executable);
    lodash.set(state, domain, domainState);
  }
  if (domainState) {
    const executableState = lodash.get(domainState, action.payload.executable);
    if (executableState) {
      if (action.type.indexOf('_PENDING') > -1) {
        const newState = { ...initialState, pending: true };
        state.pending = true;
        lodash.set(domainState, action.payload.executable, newState);
      }
      else if (action.type.indexOf('_FULFILLED') > -1) {
        const newState = {
          ...initialState, done: true,
          data: action.payload.result
        };
        state.pending = false;
        state.error = null;
        lodash.set(domainState, action.payload.executable, newState);
      }
      else if (action.type.indexOf('_REJECTED') > -1) {
        const newState = {
          ...initialState, done: true,
          error: action.payload
        };
        if (!state.error) {
          state.error = {};
        }
        const errorExec = {};
        state.pending = false;
        lodash.set(errorExec, action.payload.executable, { invalid: true, message: action.payload.error.message });
        lodash.set(state.error, action.payload.domain, errorExec);
        lodash.set(domainState, action.payload.executable, newState);
      }
    }

  } else if (action.type.indexOf('_CLEAR_API') > -1) {
    let domainActionContent = action.type.replace('_CLEAR_API', '');
    lodash.unset(state, domainActionContent)
  }
  return state;
}

module.exports = reducer;
