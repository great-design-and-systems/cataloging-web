import { ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import React from 'react';
import SearchField from './controls/SearchField';
import cssmodules from 'react-css-modules';
import styles from './toolbar-controls.cssmodule.scss';

class ToolbarControls extends React.Component {
    render() {
        return (<ToolbarGroup className="toolbar-controls-component" styleName="toolbar-controls-component">
            <SearchField {...this.props} />
        </ToolbarGroup>);
    }
}

export default cssmodules(ToolbarControls, styles);
