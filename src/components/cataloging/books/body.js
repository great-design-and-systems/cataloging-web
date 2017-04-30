import React from 'react';

export default class Body extends React.Component {
    componentWillMount() {
        console.log('books body', this.props);
    }
    render() {
        return (<div>
        </div>);
    }
}