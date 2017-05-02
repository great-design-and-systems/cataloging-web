import { ContainerPropTypes, mapDispatchToProps, mapStateToProps } from './Container';
import React, {
    Component,
} from 'react';

import { ApiData } from '../helpers/';
import { DOMAIN_CATALOGUING } from '../constants';
import Main from '../components/cataloging/books/body';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.apiData = new ApiData();
    }
    componentWillMount() {
        this.props.actions.HeadersControlsSet({
            home: { visible: true },
            search: { visible: true, hint: 'Search books' },
            add: {
                visible: true,
                action: () => {
                    this.props.actions.RouterPush('/');
                }
            }
        });
        this.props.actions.BooksList();
    }
    componentDidUpdate() {
        this.bookList = this.apiData.getActionData(this.props.ApiService, DOMAIN_CATALOGUING, 'getItemCategory', 'data.data.docs');
    }
    render() {
        return <Main {...this.props} BookList={this.bookList} />;
    }
}
App.propTypes = ContainerPropTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
