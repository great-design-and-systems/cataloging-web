/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import { Batchlet } from '../helpers/';
import {
    SEARCH_SET_QUERY,
} from '../actions/const';

const initialState = {
    query: null,
    processor: new Batchlet()
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SET_QUERY:
            state = { ...action.payload };
            return state;
        default:
            {
                /* Return original state if no actions were consumed. */
                return state;
            }
    }
}

module.exports = reducer;