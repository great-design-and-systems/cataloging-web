import AppRoutes from '../../router/';
import React from 'react';
import { Route } from 'react-router';

const AppContent = (props) => {
    return (<div>
        {props.children}
    </div>);
}

export default AppContent;