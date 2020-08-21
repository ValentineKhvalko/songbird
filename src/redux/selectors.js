import { createSelector } from "reselect";

import birdsData from '../birdsData'

export const currentPageNumberSelector = state => state.pageNumber;

export const currentBirdIndexSelector = state => state.birdIndex;

export const isCorrectAnswerSelector = state => state.isCorrectAnswer;

export const choosedBirdSelector = state => state.choosedBird;

export const currentBirdSelector = createSelector(
  [currentPageNumberSelector, currentBirdIndexSelector], (pageNumber, birdIndex) => {
    return birdsData[pageNumber][birdIndex];
  }
)