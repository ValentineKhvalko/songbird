import { combineReducers } from "redux";
import { isCorrectAnswerReducer } from './answerReducer';
import { currentPageNumberReducer } from './currentPageNumberReducer';
import { currentBirdIndexReducer } from './currentBirdIndexRedicer';
import { choosedBirdReducer } from './choosedBirdReduser';
 
export const rootReducer = combineReducers({
  isCorrectAnswer: isCorrectAnswerReducer,
  pageNumber: currentPageNumberReducer,
  birdIndex: currentBirdIndexReducer,
  choosedBird: choosedBirdReducer,
})