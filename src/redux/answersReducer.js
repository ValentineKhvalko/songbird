import { handleActions } from 'redux-actions';
import {giveAnAnswerAction} from './actions';

export const givenAnswersReducer = handleActions({
  [giveAnAnswerAction]: (state, action) => {
    if(state[action.payload.pageIndex]){
      state[action.payload.pageIndex] = [...state[action.payload.pageIndex], action.payload.birdIndex]
    } else {
     state[action.payload.pageIndex] = [action.payload.birdIndex];
    }
    return [...state];
  }
}, []);

