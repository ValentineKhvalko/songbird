import { createSelector } from "reselect";

import birdsData from '../birdsData'

export const currentPageNumberSelector = state => state.pageNumber;

export const currentBirdIndexSelector = state => state.birdIndex;

export const givenAnswersSelector = state => state.givenAnswers;

export const choosedBirdSelector = state => state.choosedBird;

export const scoreSelector = state => state.score;

export const endOfGameSelector = state => state.isGameOver;

export const currentBirdSelector = createSelector(
  [currentPageNumberSelector, currentBirdIndexSelector], (pageNumber, birdIndex) => {
    return birdsData[pageNumber][birdIndex];
  }
)

export const currentPageAnswersSelector = createSelector(
  [givenAnswersSelector, currentPageNumberSelector], (answers, pageNumber) => {
    return answers[pageNumber] || [];
  }
)