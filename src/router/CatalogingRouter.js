const Router = {
    id: 'catalogingRoot',
    content: {
        path: '/cataloging',
        label: 'Cataloging',
        icon: 'archive',
        children: [
            {
                id: 'newEntry',
                content: {
                    path: '/new-entry',
                    icon: 'file',
                    label: 'New entry'
                }
            },
            {
                id: 'onlineSearch',
                content: {
                    path: '/online-search',
                    icon: 'book',
                    label: 'Online Search'
                }
            }]
    }
};

export default Router;