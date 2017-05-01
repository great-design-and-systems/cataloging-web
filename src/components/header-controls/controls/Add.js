import Control from './Control';
import React from 'react';

export default class Add extends React.Component {
    onClick() {
        if (this.props.HeadersControls.add.action) {
            this.props.HeadersControls.add.action();
        }
    }
    render() {
        return (<Control onClick={this.onClick.bind(this)} {...this.props.HeadersControls.add} fontIcon="fa fa-plus fa-fw fa-lg" />)
    }
}