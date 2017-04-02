import React from 'react';

const DrawerLink = (props) => {
    const route = props.route;
    return (
        <a className="mdl-navigation__link" href="">{route.content.label}</a>
    )
}
export default DrawerLink;