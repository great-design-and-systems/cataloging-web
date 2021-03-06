import './app.css';

import AppContent from './AppContent';
import AppDrawer from '../drawer/Drawer';
import AppHeader from './AppHeader';
import AppProgress from './AppProgress';
import AppToolbar from './AppToolbar';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (<div className="app-component">
      <AppHeader {...this.props} />
      <AppProgress {...this.props} />
      <AppToolbar {...this.props} />
      <AppDrawer {...this.props} />
      <AppContent {...this.props} />
    </div>)
  }
}

AppComponent.defaultProps = {
  appTitle: 'LibCat'
};

export default AppComponent;
