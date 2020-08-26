import { handleActions } from "redux-actions";
import { setScoreAction } from './actions';

export const scoreReducer =  handleActions ({
  [setScoreAction]: (state, action) => {
    if(action.payload === 'reset') return 0;
    else return state += action.payload;
  }
}, 0);