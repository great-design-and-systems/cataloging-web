import { BOOKS_SET_LIST } from './../const';

function action(payload) {
    return { type: BOOKS_SET_LIST, payload: payload };
}

module.exports = action;
