import { IndexRoute, Route } from 'react-router';

import { Api } from '../services/ApiService';
import AppRoutes from '../router/';
import { BrowserRouter } from 'react-router-dom';
import FA from 'react-fontawesome';
import { GDS_API } from '../constants';
import React from 'react';

class AppRoute extends React.Component {
  componentWillMount() {
    this.setState({ loaded: false })
    new Api().init(GDS_API, () => {
      this.setState({ loaded: true });
    });
  }
  renderLoadedContent() {
    return (<BrowserRouter>
      <Route path={AppRoutes.App.content.path} component={AppRoutes.App.content.component}></Route>
    </BrowserRouter>)
  }
  render() {
    return !!this.state.loaded ? this.renderLoadedContent() :
      <span><FA spin={true} name="spinner" />&nbsp;Loading...</span>;
  }
}

AppRoute.displayName = 'AppRoute';
export default AppRoute;
