import React from 'react';
import ViewFilterTab from '../../common/ViewFilterTab';

export default class Body extends React.Component {
    render() {
        return (<div>
            <ViewFilterTab {...this.props} />
        </div>);
    }
}