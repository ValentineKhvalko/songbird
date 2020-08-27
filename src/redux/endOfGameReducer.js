import { handleActions } from "redux-actions";
import { endOfGameAction } from './actions';

export const endOfGameReduser =  handleActions ({
  [endOfGameAction]: (state, action) => action.payload
}, false);