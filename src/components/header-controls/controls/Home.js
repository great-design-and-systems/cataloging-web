import Control from './Control';
import React from 'react';

export default class Home extends React.Component {
    onClickHome() {
        this.props.actions.HeadersControlsReset();
        this.props.actions.RouterPush('/');
    }
    render() {
        return (<Control onClick={this.onClickHome.bind(this)} {...this.props.HeadersControls.home} fontIcon="fa fa-home fa-fw fa-lg" />)
    }
}