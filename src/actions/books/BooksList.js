import ApiSave from '../api/ApiSave';
import { BOOKS_LIST } from './../const';
import {DOMAIN_CATALOGUING} from '../../constants';

function action(query) {
      return ApiSave({
        action: '{'+DOMAIN_CATALOGUING+'.getItemCategory}', 
        json: {category:'books', query:query||{}}
    });
}

module.exports = action;
