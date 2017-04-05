/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
  ROUTER_GO_TO
} from '../actions/const';
import {
  browserHistory
} from 'react-router';
import React from 'react';
const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case ROUTER_GO_TO:
      browserHistory.push(action.payload);
      break;
    default:
      {
        /* Return original state if no actions were consumed. */
        return state;
      }
  }
}

module.exports = reducer;