import Add from './controls/Add';
import Home from './controls/Home';
import Process from './controls/Process';
import React from 'react';
import Search from './controls/Search';
import User from './controls/User';
import cssmodules from 'react-css-modules';
import styles from './headers-controls.cssmodule.scss';

class HeadersControls extends React.Component {
    render() {
        return (<div className="headers-controls-component" styleName="headers-controls-component">
            <Home {...this.props} />
            <Search {...this.props} />
            <Add {...this.props} />
            <Process {...this.props} />
            <User {...this.props} />
        </div>);
    }
}

export default cssmodules(HeadersControls, styles);
