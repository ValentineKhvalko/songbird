import { handleActions } from "redux-actions";
import { setPageNumberAction } from './actions';

export const currentPageNumberReducer =  handleActions ({
  [setPageNumberAction]: (state, action) => {
    if(action.payload === 'reset') return 0;
    else return state += action.payload;
  }
}, 0);