import { AppContainer } from 'react-hot-loader';
import AppRoute from './components/Route';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores';
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <AppRoute />
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
          <AppRoute />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
