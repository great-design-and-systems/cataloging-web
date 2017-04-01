import { API_CLEAR } from '../const';

function action(parameter) {
  return { type: parameter.replace('{', '').replace('}', '') + '_CLEAR_API' };
}

module.exports = action;
