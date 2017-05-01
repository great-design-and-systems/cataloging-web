import {
    ApiClear,
    ApiGet,
    ApiQuery,
    ApiRemove,
    ApiSave,
    BooksList,
    BooksSetList,
    DrawerToggle,
    HeadersControlsReset,
    HeadersControlsSet,
    RouterPush,
    SearchSetQuery,
    ToolbarHide,
    ToolbarShow,
    ViewFilterGrid,
    ViewFilterList,
    ViewFilterTable,
} from '../actions/';
import React, {
    PropTypes,
} from 'react';

import { bindActionCreators } from 'redux';

export const ContainerPropTypes = {
    actions: PropTypes.shape({
        ApiClear: PropTypes.func.isRequired,
        ApiGet: PropTypes.func.isRequired,
        ApiQuery: PropTypes.func.isRequired,
        ApiRemove: PropTypes.func.isRequired,
        ApiSave: PropTypes.func.isRequired,
        DrawerToggle: PropTypes.func.isRequired,
        RouterPush: PropTypes.func.isRequired,
        ViewFilterList: PropTypes.func.isRequired,
        ViewFilterTable: PropTypes.func.isRequired,
        ViewFilterGrid: PropTypes.func.isRequired,
        HeadersControlsSet: PropTypes.func.isRequired,
        HeadersControlsReset: PropTypes.func.isRequired,
        ToolbarHide: PropTypes.func.isRequired,
        ToolbarShow: PropTypes.func.isRequired,
        SearchSetQuery: PropTypes.func.isRequired,
        BooksList: PropTypes.func.isRequired,
        BooksSetList: PropTypes.func.isRequired
    }),
    Drawer: PropTypes.shape({}),
    ApiService: PropTypes.shape({}),
    routing: PropTypes.shape({}),
    NewEntry: PropTypes.shape({}),
    form: PropTypes.shape({}),
    ViewFilter: PropTypes.shape({}),
    HeadersControls: PropTypes.shape({}),
    Toolbar: PropTypes.shape({}),
    Search: PropTypes.shape({}),
    Books: PropTypes.shape({})
};

export function mapStateToProps(state) {
    const props = {
        Drawer: state.Drawer,
        ApiService: state.ApiService,
        routing: state.routing,
        NewEntry: state.NewEntry,
        form: state.form,
        ViewFilter: state.ViewFilter,
        HeadersControls: state.HeadersControls,
        Toolbar: state.Toolbar,
        Search: state.Search,
        Books: state.Books
    };
    return props;
}

export function mapDispatchToProps(dispatch) {
    const actions = {
        ApiClear,
        ApiGet,
        ApiQuery,
        ApiRemove,
        ApiSave,
        DrawerToggle,
        RouterPush,
        ViewFilterList,
        ViewFilterTable,
        ViewFilterGrid,
        HeadersControlsSet,
        HeadersControlsReset,
        ToolbarHide,
        ToolbarShow,
        SearchSetQuery,
        BooksList,
        BooksSetList
    };
    const actionMap = { actions: bindActionCreators(actions, dispatch) };
    return actionMap;
}