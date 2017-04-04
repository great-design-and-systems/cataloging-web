import FA from 'react-fontawesome';
import React from 'react';

const Router = {
    id: 'catalogingRoot',
    content: {
        path: '/cataloging',
        label: 'Cataloging',
        icon: <FA name="archive" />,
        children: [
            {
                id: 'newEntry',
                content: {
                    path: '/new-entry',
                    icon: <FA name="file" />,
                    label: 'New entry'
                }
            },
            {
                id: 'onlineSearch',
                content: {
                    path: '/online-search',
                    icon: <FA name="book" />,
                    label: 'Online Search'
                }
            }]
    }
};

export default Router;