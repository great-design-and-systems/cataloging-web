import DrawerLink from './DrawerLink';
import FA from 'react-fontawesome';
import React from 'react';
import lodash from 'lodash';

const DrawerLinks = (props) => {
    let links = [];
    new RenderLinks(lodash.values(props.routes), (results) => {
        links = results;
    });
    return (<nav className="mdl-navigation">{links}</nav>)
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
                    subRoutes.push(
                        <DrawerLink key={route.id} route={route} parent={parent} hasChildren={true} />
                    );
                    new RenderLinks(route.content.children, (subResults) => {
                        if (subResults) {
                            subResults.map((SubLink) => {
                                result.push(SubLink);
                            });
                        }
                    }, subRoutes, parent, index);
                } else {
                    result.push(
                        <DrawerLink key={route.id} route={route} parent={parent} />
                    );
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