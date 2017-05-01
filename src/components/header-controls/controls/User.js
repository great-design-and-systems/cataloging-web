import Control from './Control';
import React from 'react';

export default class User extends React.Component {
    render() {
        return (<Control {...this.props.HeadersControls.user} fontIcon="fa fa-user fa-fw fa-lg" />)
    }
}