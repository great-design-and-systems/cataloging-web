import FA from 'react-fontawesome';
import React from 'react';

const AppHeader = (props) => {
    return (
        <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">{props.appTitle}</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link"><FA name="sign-in" />&nbsp;Login</a>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;