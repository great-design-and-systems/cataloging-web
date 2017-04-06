import { List, ListItem } from 'material-ui/List';
import { cyan100, grey700 } from 'material-ui/styles/colors';

import React from 'react';

const DrawerLink = (inheritedProps) => {
    const route = inheritedProps.route;
    const props = {};
    const handleClick = () => {
        if (inheritedProps.onClick) {
            let path = route.content.path;
            if(inheritedProps.parent){
                path = inheritedProps.parent.content.path + route.content.path;
            }
            inheritedProps.onClick(path);
        }
    }
    let link;
    if (inheritedProps.hasChildren) {
        let toggled = false;
        link = (<List style={{ padding: 0 }}>
            <ListItem style={{ backgroundColor: cyan100, color: grey700 }} disabled={true} leftIcon={route.content.icon}>{route.content.label}</ListItem>
            {inheritedProps.subRoutes}
        </List>);
    } else {
        props.leftIcon = route.content.icon;
        props.style = {
            borderBottomColor: cyan100
        }
        link = <ListItem onClick={handleClick} {...props}>{route.content.label}</ListItem>
    }
    return link;
}
export default DrawerLink;