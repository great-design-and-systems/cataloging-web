import AppRoutes from '../router/';
import { BrowserRouter } from 'react-router-dom';
import FA from 'react-fontawesome';
import React from 'react';
import {Route} from 'react-router';

class AppRoute extends React.Component {
  render() {
    return (<BrowserRouter>
      <Route path={AppRoutes.App.content.path} component={AppRoutes.App.content.component}>
      </Route>
    </BrowserRouter>);
  }
}

AppRoute.displayName = 'AppRoute';
export default AppRoute;
