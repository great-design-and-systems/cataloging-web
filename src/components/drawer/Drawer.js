import AppRoutes from '../../router/';
import Drawer from 'material-ui/Drawer';
import DrawerLinks from './DrawerLinks';
import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './drawer.cssmodule.scss';

class AppDrawer extends React.Component {
  render() {
    return (<Drawer docked={false} open={this.props.Drawer.toggle} className="drawer-component" styleName="drawer-component">
      <DrawerLinks {...this.props} routes={AppRoutes} />
    </Drawer>)
  }
}

AppDrawer.displayName = 'AppDrawer';
AppDrawer.propTypes = {};
AppDrawer.defaultProps = {
};

export default cssmodules(AppDrawer, styles);
