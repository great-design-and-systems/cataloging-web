import Books from '../containers/Books';
import Cataloging from '../containers/Cataloging';
import FA from 'react-fontawesome';
import React from 'react';

const Router = {
    id: 'catalogingRoot',
    content: {
        path: 'cataloging',
        label: 'Cataloging',
        icon: <FA name="archive" />,
        component: Cataloging,
        children: [
            {
                id: 'books',
                content: {
                    path: 'books',
                    icon: <FA name="book" />,
                    label: 'Books',
                    component: Books
                }
            }]
    }
};

export default Router;