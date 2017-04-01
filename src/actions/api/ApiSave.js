import { API_SAVE } from '../const';

function action(parameter) {
  return { type: parameter.action, payload: { json: parameter.json, params: parameter.params } };
}

module.exports = action;
