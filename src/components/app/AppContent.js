import AppRoutes from '../../router/';
import React from 'react';
import { Route } from 'react-router';

const AppContent = (props) => {
    console.log('AppContent.props', props);
    return (<div className="app-content">
        {props.children}
    </div>);
}

export default AppContent;