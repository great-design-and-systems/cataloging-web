import AppRoutes from '../../router';
import React from 'react';
import { Route } from 'react-router-dom';
import cssmodules from 'react-css-modules';
import styles from './cataloging.cssmodule.scss';

class Cataloging extends React.Component {
    render() {
        return (<div className="cataloging-component" styleName="cataloging-component">
            <Route path={AppRoutes.Cataloging.content.path + AppRoutes.Cataloging.content.children[0].content.path} component={AppRoutes.Cataloging.content.children[0].content.component} />
            <Route path={AppRoutes.Cataloging.content.path + AppRoutes.Cataloging.content.children[1].content.path} component={AppRoutes.Cataloging.content.children[1].content.component} />
        </div>)
    }
}

Cataloging.displayName = 'Cataloging';
Cataloging.propTypes = {};
Cataloging.defaultProps = {
};

export default cssmodules(Cataloging, styles);
