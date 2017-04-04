import AppRoutes from '../../router/';
import Drawer from 'material-ui/Drawer';
import DrawerLinks from './DrawerLinks';
import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './drawer.cssmodule.scss';

class AppDrawer extends React.Component {

  render() {
    return (<Drawer docked={false} open={this.props.Drawer.toggle} className="drawer-component" styleName="drawer-component">
      <h1>{this.props.appTitle}</h1>
      <DrawerLinks {...this.props}/>
    </Drawer>)
  }
}

AppDrawer.displayName = 'DrawerDrawer';
AppDrawer.propTypes = {};
AppDrawer.defaultProps = {
  routes: AppRoutes
};

export default cssmodules(AppDrawer, styles);
