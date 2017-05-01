import { TOOLBAR_HIDE } from './../const';

function action(payload) {
    return { type: TOOLBAR_HIDE, payload: payload };
}

module.exports = action;
