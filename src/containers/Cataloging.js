import { ContainerPropTypes, mapDispatchToProps, mapStateToProps } from './Container';
import React, {
    Component,
} from 'react';

import Main from '../components/cataloging/Cataloging';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return <Main {...this.props} />;
    }
}
App.propTypes = ContainerPropTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
