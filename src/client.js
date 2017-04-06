import {Api} from './services/ApiService';
import { AppContainer } from 'react-hot-loader';
import AppRoute from './components/Route';
import { BrowserRouter } from 'react-router-dom';
import {GDS_API} from './constants';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores';
import injectTapEventPlugin  from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

new Api().init(GDS_API, () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRoute />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
  if (module.hot) {
    module.hot.accept('./components/Route', () => {
      const AppRoute = require('./components/Route').default; // eslint-disable-line global-require
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <MuiThemeProvider>
              <AppRoute />
            </MuiThemeProvider>
          </Provider>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
});

