import { RELOAD_SITES } from '../actions/types';

const initialState = {
  sites: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case RELOAD_SITES:
      console.log('RELOAD_STIES reducer');
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
