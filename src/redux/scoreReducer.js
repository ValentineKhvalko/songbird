import { handleActions } from "redux-actions";
import { setScoreAction } from './actions';

export const scoreReducer =  handleActions ({
  [setScoreAction]: (state, action) => state += action.payload
}, 0);