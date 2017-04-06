import AppRoutes from '../../router/';
import React from 'react';
import { Route } from 'react-router-dom';

const AppContent = (props) => {
    return (<div>
        <Route path={AppRoutes.Cataloging.content.path} component={AppRoutes.Cataloging.content.component} />
    </div>);
}

export default AppContent;