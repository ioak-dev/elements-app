import React from 'react';

import { Route } from 'react-router-dom';
import './RouterView.scss';
import Home from '../Home';
import OaLogin from '../Auth/OaLogin';
import Landing from '../Landing';
import OakRouteApp from '../Auth/OakRouteApp';
import Unauthorized from '../Auth/Unauthorized';
import ListSite from '../ListSite';
import BuildSite from '../BuildSite';

interface Props {
  cookies: any;
}

const RouterView = (props: Props) => {
  return (
    <div className="router-view">
      <Route
        path="/login"
        render={(propsLocal) => (
          <OakRouteApp {...propsLocal} {...props} component={OaLogin} />
        )}
      />
      <Route
        path="/unauthorized"
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={Unauthorized}
            middleware={['isAuthenticated']}
          />
        )}
      />
      <Route
        path="/"
        exact
        render={(propsLocal) => (
          <OakRouteApp {...propsLocal} {...props} component={Landing} />
        )}
      />
      <Route
        path="/home"
        exact
        render={(propsLocal) => (
          <OakRouteApp {...propsLocal} {...props} component={Landing} />
        )}
      />
      <Route
        path="/site"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={ListSite}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/site/:sitename/edit"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={BuildSite}
            middleware={['authenticate']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
