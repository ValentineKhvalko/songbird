import { handleActions } from "redux-actions";
import { setCurrentBirdIndexAction } from './actions';

import {randomNumberToSix} from '../units';

const initialRandomBirdIndex = randomNumberToSix();

export const currentBirdIndexReducer =  handleActions ({
  [setCurrentBirdIndexAction]: (state, action) => action.payload
}, initialRandomBirdIndex)