/* eslint-disable import/prefer-default-export */
import { RELOAD_SITES } from './types';
import { httpGet, httpPut } from '../components/Lib/RestTemplate';

const domain = 'site';

export const fetchAllSites = (authorization: any) => (dispatch: any) => {
  httpGet('/site', {
    headers: {
      Authorization: authorization.token,
    },
  }).then((response: any) => {
    dispatch({
      type: RELOAD_SITES,
      payload: { sites: response.data.data },
    });
  });
};

export const saveSite = (payload: any, authorization: any) => (
  dispatch: any
) => {
  console.log(payload);
  httpPut('/site/', payload, {
    headers: {
      Authorization: authorization.token,
    },
  }).then((response: any) => {
    console.log(response);
    // dispatch({
    //   type: RELOAD_SITES,
    //   payload: { sites: response.data.data },
    // });
  });
};
