import { handleActions } from 'redux-actions';
import {isCorrectAnswerAction} from './actions';

export const isCorrectAnswerReducer = handleActions({
  [isCorrectAnswerAction]: (state, action) => action.payload
}, false);

