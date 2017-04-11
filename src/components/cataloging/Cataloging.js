import AppRoutes from '../../router';
import React from 'react';
import { Route } from 'react-router';
import cssmodules from 'react-css-modules';
import styles from './cataloging.cssmodule.scss';

class Cataloging extends React.Component {
    render() {
        return (<div className="cataloging-component" styleName="cataloging-component">
            {this.props.children}
        </div>)
    }
}

Cataloging.displayName = 'Cataloging';
Cataloging.propTypes = {};
Cataloging.defaultProps = {
};

export default cssmodules(Cataloging, styles);
