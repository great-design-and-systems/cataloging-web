import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';

export default class User extends React.Component {
    render() {
        const style = {
            marginRight: 8
        }
        return (<FloatingActionButton mini={true} style={style} secondary={true}>
            <FontIcon className="fa fa-user fa-fw fa-lg" />
        </FloatingActionButton>);
    }
}