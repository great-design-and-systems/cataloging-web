/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
    TOOLBAR_HIDE,
    TOOLBAR_SHOW,
} from '../actions/const';

const initialState = {
    visible: false,
    search: { visible: false }
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOOLBAR_SHOW:
            state = { ...action.payload, visible: true }
            return state;
        case TOOLBAR_HIDE:
            state = { ...action.payload, visible: false }
            return state;
        default:
            {
                /* Return original state if no actions were consumed. */
                return state;
            }
    }
}

module.exports = reducer;