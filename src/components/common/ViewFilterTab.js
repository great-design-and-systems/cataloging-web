import { Tab, Tabs } from 'material-ui/Tabs';

import FA from 'react-fontawesome';
import React from 'react';

export default class ViewFilterTab extends React.Component {
    constructor(props) {
        super(props);
        if (!props.actions) {
            throw new Error('Property "actions" is required');
        }
    }
    componentWillMount() {
        if (this.props.initialTab) {
            this.onChange(this.props.initialTab);
        } else {
            this.props.actions.ViewFilterGrid();
        }
    }
    onChange(value) {
        switch (value) {
            case 'grid-tab':
                this.props.actions.ViewFilterGrid();
                break;
            case 'table-tab':
                this.props.actions.ViewFilterTable();
                break;
            case 'list-tab':
                this.props.actions.ViewFilterList();
                break;
        }
    }
    render() {
        return (<Tabs onChange={this.onChange.bind(this)}>
            <Tab value="grid-tab" icon={<FA name="th" />} label="Grid" />
            <Tab value="table-tab" icon={<FA name="table" />} label="Table" />
            <Tab value="list-tab" icon={<FA name="list" />} label="List" />
        </Tabs>)
    }
}