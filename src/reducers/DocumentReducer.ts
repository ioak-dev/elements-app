import { RELOAD_DOCUMENTS } from '../actions/types';

const initialState = {
  documents: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case RELOAD_DOCUMENTS:
      console.log('RELOAD_DOCUMENTS reducer');
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
