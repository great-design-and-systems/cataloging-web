import AppBar from 'material-ui/AppBar';
import FA from 'react-fontawesome';
import FlatButton from 'material-ui/FlatButton';
import HeadersControls from '../header-controls/HeadersControls';
import IconButton from 'material-ui/IconButton';
import React from 'react';

class AppHeader extends React.Component {
    componentWillMount() {
        this.setState({
            title: this.props.appTitle
        });
    }

    getTitle() {
        switch (this.props.router.getCurrentLocation().pathname) {
            case '/cataloging/books':
                return 'Books';
            default:
                return this.props.appTitle;
        }
    }
    toggleDrawer() {
        this.props.actions.DrawerToggle();
    }
    render() {
        const toggerDrawer = this.toggleDrawer.bind(this);
        return (<AppBar onLeftIconButtonTouchTap={toggerDrawer} title={this.getTitle()} iconElementRight={<HeaderRightComponent {...this.props} />} />);
    }
}

const HeaderRightComponent = (props) => {
    return (<HeadersControls {...props} />)
}

export default AppHeader;