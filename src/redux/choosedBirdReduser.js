import { handleActions } from "redux-actions";
import { choosedBirdAction } from './actions';

export const choosedBirdReducer =  handleActions ({
  [choosedBirdAction]: (state, action) => action.payload
}, false);