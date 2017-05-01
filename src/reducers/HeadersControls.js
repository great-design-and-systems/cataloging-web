/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
    HEADERS_CONTROLS_RESET,
    HEADERS_CONTROLS_SET,
} from '../actions/const';

const controlState = {
    visible: true
};
const initialState = {
    home: {
        visible: false
    },
    search: {
        visible: false
    },
    add: {
        visible: false
    },
    process: controlState,
    user: controlState
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case HEADERS_CONTROLS_SET:
            state = { ...state, ...action.payload };
            return state;
        case HEADERS_CONTROLS_RESET:
            state = initialState;
            return state;
        default:
            {
                /* Return original state if no actions were consumed. */
                return state;
            }
    }
}

module.exports = reducer;