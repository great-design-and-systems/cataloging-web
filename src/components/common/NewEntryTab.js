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
        }
    }
    onChange(value) {
        switch (value) {
            case 'online-search-tab':
                break;
            case 'manual-entry-tab':
                break;
        }
    }
    render() {
        return (<Tabs onChange={this.onChange.bind(this)}>
            {this.props.onlineSearchTabComponent ? <Tab value="online-search-tab" icon={<FA name="search" />} label="Online Search">
                {this.props.onlineSearchTabComponent}
            </Tab> : ''}
            {this.props.manualEntryTabComponent ? <Tab value="manual-entry-tab" icon={<FA name="file" />} label="Manual Entry">
                {this.props.manualEntryTabComponent}
            </Tab> : ''}
        </Tabs>)
    }
}