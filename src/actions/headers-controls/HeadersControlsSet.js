import { HEADERS_CONTROLS_SET } from './../const';

function action(payload) {
    return { type: HEADERS_CONTROLS_SET, payload: payload };
}

module.exports = action;
