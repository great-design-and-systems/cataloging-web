import { SEARCH_SET_QUERY } from './../const';

function action(payload) {
    return { type: SEARCH_SET_QUERY, payload: payload };
}

module.exports = action;
