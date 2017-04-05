import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import DrawerLink from './DrawerLink';
import FA from 'react-fontawesome';
import React from 'react';
import Subheader from 'material-ui/Subheader';
import { cyan500 } from 'material-ui/styles/colors';
import lodash from 'lodash';

const DrawerLinks = (props) => {
    let links = [];
    new RenderLinks(lodash.values(props.routes), (results) => {
        links = results;
    });
    return (<List style={{ padding: 0 }}>
        <ListItem style={{ backgroundColor: cyan500, color: 'white' }} rightIcon={<FA name="close" />} onClick={props.actions.DrawerToggle.bind(this)}><h1>{props.appTitle}</h1></ListItem>
        {links}
    </List>)
}
class RenderLinks {
    constructor(routes, done, result, parent, index) {
        if (!index) {
            index = 0;
        }
        if (index < routes.length) {
            const route = routes[index];
            if (!result) {
                result = [];
            }
            if (route && !route.hideFromDrawer && route.content) {
                if (route.content.children) {
                    const subRoutes = [];
                    const parentProps = {
                        key: route.id,
                        parent: parent,
                        hasChildren: true,
                        route: route
                    };
                    new RenderLinks(route.content.children, (subResults) => {
                        parentProps.subRoutes = subResults;
                    }, [], parent, index);
                    result.push(
                        <DrawerLink key={route.id} {...parentProps} />
                    );
                } else {
                    result.push(
                        <DrawerLink key={route.id} route={route} parent={parent} />
                    );
                    result.push(
                        <Divider  key={'divider_' + route.id}/>
                    )
                }
            }
            index++;
            new RenderLinks(routes, done, result, parent, index);
        } else {
            done(result);
        }
    }
}


export default DrawerLinks;