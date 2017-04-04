import AppBar from 'material-ui/AppBar';
import FA from 'react-fontawesome';
import IconButton from 'material-ui/IconButton';
import React from 'react';

class AppHeader extends React.Component {
    toggleDrawer(){
        console.log('toggled');
        this.props.actions.DrawerToggle();
    }
    render() {
        const toggerDrawer = this.toggleDrawer.bind(this);
        return(<AppBar onLeftIconButtonTouchTap={toggerDrawer} title={this.props.appTitle}/>);
    }
}

export default AppHeader;