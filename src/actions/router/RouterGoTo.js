import { ROUTER_GO_TO } from './../const';

function action(path) {
    return { type: ROUTER_GO_TO , payload : path};
}

module.exports = action;
