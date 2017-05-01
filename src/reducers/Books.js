import {
   BOOKS_SET_LIST,
} from '../actions/const';
import {DOMAIN_CATALOGUING} from '../constants';

const controlState = {
    visible: true
};
const initialState = {
    list: [],
    newBook: {},
    book:{},
    pending: false
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case DOMAIN_CATALOGUING+'.getItemCategory_PENDING':
        state = {...state, pending:true};
        return state;
        case  DOMAIN_CATALOGUING+'.getItemCategory_REJECTED':
        state = {...state, pending:false};
        return state;
        case  DOMAIN_CATALOGUING+'.getItemCategory_FULFILLED':
        state = {...state, pending:false};
        return state;
        case BOOKS_SET_LIST:
        state = {...state, list: action.payload}
        return state;
        default:
        return state;
    }
}

module.exports = reducer;