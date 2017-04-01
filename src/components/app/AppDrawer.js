import React from 'react';

const AppDrawer = (props) => {
    return (<div className="mdl-layout__drawer">
        <span className="mdl-layout-title">{props.appTitle}</span>
        <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
        </nav>
    </div>);
}
export default AppDrawer;