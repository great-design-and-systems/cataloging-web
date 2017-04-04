import { List, ListItem } from 'material-ui/List';

import React from 'react';
import { cyan100 } from 'material-ui/styles/colors';

const DrawerLink = (inheritedProps) => {
    const route = inheritedProps.route;
    const props = {};
    let link;
    if (inheritedProps.hasChildren) {
        let toggled = false;
        link = (<List>
            <ListItem style={{ backgroundColor: cyan100 }} disabled={true} leftIcon={route.content.icon}>{route.content.label}</ListItem>
            {inheritedProps.subRoutes}
        </List>);
    } else {
        props.leftIcon = route.content.icon;
        props.style = {
            borderBottomColor: cyan100
        }
        link = <ListItem  {...props}>{route.content.label}</ListItem>
    }
    return link;
}
export default DrawerLink;