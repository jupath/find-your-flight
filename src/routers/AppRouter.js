import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from '../constants/routes';
import PrivateRoute from './PrivateRoute';
import Home from '../components/pages/Home';
import MyFavorites from '../components/pages/MyFavorites';
import PageNotFound from '../components/pages/PageNotFound';
import Footer from '../components/layout/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={routes.HOME} component={Home} exact />
        <PrivateRoute path={routes.MY_FAVORITES} component={MyFavorites} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
