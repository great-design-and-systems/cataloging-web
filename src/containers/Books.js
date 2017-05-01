import { ContainerPropTypes, mapDispatchToProps, mapStateToProps } from './Container';
import React, {
    Component,
} from 'react';

import {ApiData} from '../helpers/';
import {DOMAIN_CATALOGUING} from '../constants';
import Main from '../components/cataloging/books/body';
import { connect } from 'react-redux';

class App extends Component {
    componentWillMount() {
        this.setState({});
    console.log('ApiData',ApiData);
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
    render() {
        return <Main {...this.props} BookList={ApiData.getActionData(this.props.ApiServce, DOMAIN_CATALOGUING, 'getItemCategory','data.docs')}/>;
    }
}
App.propTypes = ContainerPropTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
