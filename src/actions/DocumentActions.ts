/* eslint-disable import/prefer-default-export */
import { RELOAD_DOCUMENTS } from './types';
import { httpGet, httpPut } from '../components/Lib/RestTemplate';

const domain = 'document';

export const fetchAllDocuments = (authorization: any) => (dispatch: any) => {
  httpGet('/document', {
    headers: {
      Authorization: authorization.token,
    },
  }).then((response: any) => {
    dispatch({
      type: RELOAD_DOCUMENTS,
      payload: { documents: response.data.data },
    });
  });
};

export const saveDocument =
  (payload: any, authorization: any) => (dispatch: any) => {
    console.log(payload);
    httpPut('/document/', payload, {
      headers: {
        Authorization: authorization.token,
      },
    }).then((response: any) => {
      console.log(response);
      // dispatch({
      //   type: RELOAD_SITES,
      //   payload: { documents: response.data.data },
      // });
    });
  };
