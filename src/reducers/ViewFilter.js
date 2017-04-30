/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
    VIEW_FILTER_GRID,
    VIEW_FILTER_LIST,
    VIEW_FILTER_TABLE,
} from '../actions/const';

const initialState = {
    view: 'grid'
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case VIEW_FILTER_LIST:
            state = { ...state, view: 'list' }
            return state;
        case VIEW_FILTER_GRID:
            state = { ...state, view: 'grid' }
            return state;
        case VIEW_FILTER_TABLE:
            state = { ...state, view: 'table' }
            return state;
        default:
            {
                /* Return original state if no actions were consumed. */
                return state;
            }
    }
}

module.exports = reducer;