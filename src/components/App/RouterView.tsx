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
import PreviewSite from '../PreviewSite';
import ListDocument from '../ListDocument';
import BuildDocument from '../BuildDocument';
import PreviewDocument from '../PreviewDocument';

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
      <Route
        path="/site/:sitename/preview"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={PreviewSite}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/document"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={ListDocument}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/document/:documentname/edit"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={BuildDocument}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/document/:documentname/preview"
        exact
        render={(propsLocal) => (
          <OakRouteApp
            {...propsLocal}
            {...props}
            component={PreviewDocument}
            middleware={['authenticate']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
