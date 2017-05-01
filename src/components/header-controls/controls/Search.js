import Control from './Control';
import React from 'react';

export default class Search extends React.Component {
    toggle() {
        this.toggled = !this.toggled;
    }
    onClickSearch() {
        if (!this.toggled) {
            this.props.actions.ToolbarShow({
                search: {
                    visible: true,
                    hint: this.props.HeadersControls.search.hint
                }
            });
        } else {
            this.props.actions.ToolbarHide({
                search: {
                    visible: false
                }
            });
        }
        this.toggle();
    }

    getFontIcon() {
        let fontIcon = 'fa fa-search fa-fw fa-lg'
        if (this.toggled) {
            fontIcon = 'fa fa-close fa-fw fa-lg'
        }
        return fontIcon;
    }
    render() {
        return (<Control onClick={this.onClickSearch.bind(this)} {...this.props.HeadersControls.search} fontIcon={this.getFontIcon()} />)
    }
}