import { ROUTER_GO_TO } from './../const';

function action(path, params) {
    return { type: ROUTER_GO_TO , payload : {
        path: path,
        params: params
    }};
}

module.exports = action;
