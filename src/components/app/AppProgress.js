import LinearProgress from 'material-ui/LinearProgress';
import React from 'react';
import { deepPurple400 } from 'material-ui/styles/colors';

export default class AppProgress extends React.Component {
    render() {
        console.log('AppProgress', this.props.ApiService);
        return this.props.ApiService.pending ? <LinearProgress mode="indeterminate" color={deepPurple400} /> : <span id="app-no-progress"></span>;
    }
}