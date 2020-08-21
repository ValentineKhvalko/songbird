import { handleActions } from "redux-actions";
import { setPageNumberAction } from './actions';

const initialBirdIndex = Math.floor(Math.random() * 6);

export const currentBirdIndexReducer =  handleActions ({
  [setPageNumberAction]: (state, action) => action.payload
}, initialBirdIndex)