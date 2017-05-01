import React from 'react';
import { Toolbar } from 'material-ui/Toolbar';
import ToolbarControls from '../toolbar-controls/ToolbarControls';

class AppToolbar extends React.Component {
    render() {
        return this.props.Toolbar.visible ? <Toolbar>
            <ToolbarControls {...this.props} />
        </Toolbar> : <span title="empty-toolbar"></span>
    }
}

export default AppToolbar;