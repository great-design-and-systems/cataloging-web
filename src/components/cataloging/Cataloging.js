import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './cataloging.cssmodule.scss';

class Cataloging extends React.Component {
    render() {
        return (<div className="cataloging-component" styleName="cataloging-component"></div>)
    }
}

Cataloging.displayName = 'Cataloging';
Cataloging.propTypes = {};
Cataloging.defaultProps = {
};

export default cssmodules(Cataloging, styles);
