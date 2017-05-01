import Control from './Control';
import React from 'react';

export default class Process extends React.Component {
    render() {
        return (<Control {...this.props.HeadersControls.process} fontIcon="fa fa-tasks fa-fw fa-lg" />)
    }
}