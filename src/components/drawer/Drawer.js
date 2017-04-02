import AppRoutes from '../../router/';
import DrawerLinks from './DrawerLinks';
import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './drawer.cssmodule.scss';

class Drawer extends React.Component {
  render() {
    return (<div className="mdl-layout__drawer drawer-component" styleName="drawer-component">
      <span className="mdl-layout-title">{this.props.appTitle}</span>
      <DrawerLinks routes={AppRoutes} />
    </div>)
  }
}

Drawer.displayName = 'DrawerDrawer';
Drawer.propTypes = {};
Drawer.defaultProps = {};

export default cssmodules(Drawer, styles);
