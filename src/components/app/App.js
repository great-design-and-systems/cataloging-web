import './app.css';
import '../../styles/index.scss';

import AppContent from './AppContent';
import AppDrawer from '../drawer/Drawer';
import AppHeader from './AppHeader';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (<div className="mdl-layout mdl-js-layout">
      <AppHeader {...this.props} />
      <AppDrawer {...this.props} />
      <AppContent {...this.props} />
    </div>)
  }
}

AppComponent.defaultProps = {
  appTitle: 'LibCat'
};

export default AppComponent;
