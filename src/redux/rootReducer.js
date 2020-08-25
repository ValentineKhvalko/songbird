import { combineReducers } from "redux";
import { givenAnswersReducer } from './answersReducer';
import { currentPageNumberReducer } from './currentPageNumberReducer';
import { currentBirdIndexReducer } from './currentBirdIndexRedicer';
import { choosedBirdReducer } from './choosedBirdReduser';
import { scoreReducer } from './scoreReducer';
 
export const rootReducer = combineReducers({
  givenAnswers: givenAnswersReducer,
  pageNumber: currentPageNumberReducer,
  birdIndex: currentBirdIndexReducer,
  choosedBird: choosedBirdReducer,
  score: scoreReducer,
})