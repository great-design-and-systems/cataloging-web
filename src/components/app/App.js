import './app.css';

import AppContent from './AppContent';
import AppDrawer from '../drawer/Drawer';
import AppHeader from './AppHeader';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (<BrowserRouter>
      <div>
        <AppHeader {...this.props} />
        <AppDrawer {...this.props} />
        <AppContent {...this.props} />
      </div>
    </BrowserRouter>)
  }
}

AppComponent.defaultProps = {
  appTitle: 'LibCat'
};

export default AppComponent;
