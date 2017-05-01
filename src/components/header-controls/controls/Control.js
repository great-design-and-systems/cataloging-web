import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';

export default class Control extends React.Component {
    render() {
        const style = {
            marginRight: 8
        }
        return this.props.visible ?
            <FloatingActionButton onClick={this.props.onClick} mini={true} style={style} secondary={true}>
                < FontIcon className={this.props.fontIcon} />
            </FloatingActionButton > :
            <div></div>
    }
}