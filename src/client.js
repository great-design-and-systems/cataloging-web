import './styles/index.scss';

import { Route, Router, browserHistory } from 'react-router';

import { Api } from './services/ApiService';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import AppRoutes from './router/';
import { GDS_API } from './constants';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore } from 'react-router-redux';

injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const Routes = (props) => {
  return (
    <Router history={history}>
      <Route path="/" component={props.root}>
        <Route path={AppRoutes.Cataloging.content.path} component={AppRoutes.Cataloging.content.component}>
          <Route path={AppRoutes.Cataloging.content.children[0].content.path} component={AppRoutes.Cataloging.content.children[0].content.component} />
          <Route path={AppRoutes.Cataloging.content.children[1].content.path} component={AppRoutes.Cataloging.content.children[1].content.component} />
        </Route>
      </Route>
    </Router>
  )
}
new Api().init(GDS_API, () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider>
          <Routes root={App} />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const App = require('./containers/App').default; // eslint-disable-line global-require
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <MuiThemeProvider>
              <Routes root={App} />
            </MuiThemeProvider>
          </Provider>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
});

