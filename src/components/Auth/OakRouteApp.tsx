import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAuth } from '../../actions/AuthActions';
import { Authorization } from '../Types/GeneralTypes';
import { sendMessage } from '../../events/MessageService';
import { httpGet, httpPost } from '../Lib/RestTemplate';

interface Props {
  path?: string;
  render?: any;
  component: any;
  match: any;
  history: any;
  middleware?: string[];
  cookies: any;
}

const OakRoute = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const middlewares = () => {
    props.middleware?.forEach((middlewareName) => {
      if (!runMidleware(middlewareName)) {
        return false;
      }
    });
    return true;
  };

  const runMidleware = (middlewareName: string) => {
    switch (middlewareName) {
      case 'readAuthentication':
        return readAuthentication();
      case 'authenticate':
        return authenticate();
      case 'isAdmin':
        return isAdmin();
      default:
        return true;
    }
  };
  const readAuthentication = () => {
    return authenticate(false);
  };

  const authenticate = async (redirect = true) => {
    sendMessage('spaceChange', true, props.match.params.space);
    if (authorization.isAuth) {
      return true;
    }
    const accessToken = props.cookies.get(`elements-access_token`);
    const refreshToken = props.cookies.get(`elements-refresh_token`);
    if (accessToken && refreshToken) {
      httpPost(
        `/user/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/authorize_user`,
        { accessToken, refreshToken },
        null
      )
        .then((response) => {
          if (response.status === 200) {
            let newAccessToken = accessToken;
            if (response.data.access_token) {
              newAccessToken = response.data.access_token;
              props.cookies.set(`elements-access_token`, newAccessToken);
            }
            if (response.data?.claims?.user_id) {
              dispatch(
                addAuth({
                  isAuth: true,
                  ...response.data.claims,
                  access_token: newAccessToken,
                })
              );
            } else {
              props.cookies.remove(`elements-access_token`);
              props.cookies.remove(`elements-refresh_token`);
            }
          }
        })
        .catch((error: any) => {
          props.cookies.remove(`elements-access_token`);
          props.cookies.remove(`elements-refresh_token`);
          if (redirect && error.response.status === 404) {
            sendMessage('notification', true, {
              type: 'failure',
              message: 'Invalid session token',
              duration: 3000,
            });
            redirectToLogin();
          } else if (redirect && error.response.status === 401) {
            sendMessage('notification', true, {
              type: 'failure',
              message: 'Session expired',
              duration: 3000,
            });
            redirectToLogin();
          }
        });
    } else if (redirect) {
      redirectToLogin();
    } else {
      return true;
    }
  };

  const isAdmin = () => {
    redirectToUnauthorized();
    return false;
  };

  const redirectToLogin = () => {
    window.location.href = `${process.env.REACT_APP_ONEAUTH_URL}/#/realm/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/login/${process.env.REACT_APP_ONEAUTH_APP_ID}`;
    // props.history.push(`/${space}/login/home`);
  };

  const redirectToUnauthorized = () => {
    props.history.push('/unauthorized');
  };

  return (
    <>
      {middlewares() && (
        <props.component
          {...props}
          profile={profile}
          space={props.match.params.space}
          // getProfile={getProfile}
          // setProfile={props.setProfile}
        />
      )}
    </>
  );
};

export default OakRoute;
