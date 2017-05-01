import { TOOLBAR_SHOW } from './../const';

function action(payload) {
    return { type: TOOLBAR_SHOW, payload: payload };
}

module.exports = action;
