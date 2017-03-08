import './main.scss';

import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';

import AppStores from './core/js/stores';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import initPrototypes from './core/js/prototypes';
import injectTapEventPlugin from 'react-tap-event-plugin';

initPrototypes();
injectTapEventPlugin();


ReactDOM.render(<Provider store={AppStores}></Provider>, document.getElementsByTagName('app')[0]);