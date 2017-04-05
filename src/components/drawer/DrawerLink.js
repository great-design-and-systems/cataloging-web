import { List, ListItem } from 'material-ui/List';

import React from 'react';
import { cyan100, grey700 } from 'material-ui/styles/colors';

const DrawerLink = (inheritedProps) => {
    const route = inheritedProps.route;
    const props = {};
    const handleClick = ()=> {
      if(route.path){
        inheritedProps.actions.RouterGoTo(route.path);
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