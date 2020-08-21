import { handleActions } from "redux-actions";
import { setPageNumberAction } from './actions';

const initialPage = 0;

export const currentPageNumberReducer =  handleActions ({
  [setPageNumberAction]: (state, action) => state += action.payload
}, initialPage)