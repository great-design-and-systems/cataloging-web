import { API_QUERY } from '../const';

function action(parameter) {
  return { type: parameter.action, payload: parameter.query };
}

module.exports = action;
