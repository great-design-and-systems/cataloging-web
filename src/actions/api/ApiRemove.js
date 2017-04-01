import { API_REMOVE } from '../const';

function action(parameter) {
  return { type: parameter.action, payload: { params: parameter.params } };
}

module.exports = action;
