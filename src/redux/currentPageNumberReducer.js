import { handleActions } from "redux-actions";
import { setPageNumberAction } from './actions';

export const currentPageNumberReducer =  handleActions ({
  [setPageNumberAction]: (state, action) => state += action.payload
}, 0);