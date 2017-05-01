import React, { Component } from 'react';

import { BatchAction } from '../../../helpers/';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

const style = {
    width: '100%'
}
export default class SearchField extends Component {
    onSubmit(event) {
        event.preventDefault();
        if (!this.props.Search.processor.isRunning()) {
            this.props.Search.processor.execute(result => {
                this.props.action.SearchSetQuery({
                    query: result
                });
            })
        }
    }
    onChange(event) {
        this.props.Search.processor.push(new BatchAction('search', (done) => {
            setTimeout(() => {
                done(event.target.value);
            }, 200);
        }));
    }
    render() {
        return this.props.Toolbar.search.visible ? <form style={style} onChange={this.onChange.bind(this)} onSubmit={this.onSubmit.bind(this)}>
            <TextField name="query" id="search-field" fullWidth={true} hintText={this.props.Toolbar.search.hint} />
        </form> : '';
    }
}