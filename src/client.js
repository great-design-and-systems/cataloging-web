import './styles/index.scss';

import { Api } from './services/ApiService';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { GDS_API } from './constants';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

new Api().init(GDS_API, () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider>
          <App />
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
              <App />
            </MuiThemeProvider>
          </Provider>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
});

