import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames'

import {
  setPageNumberAction, 
  choosedBirdAction, 
  setCurrentBirdIndexAction, 
  endOfGameAction
} from '../../redux/actions';
import {
  currentPageAnswersSelector, 
  currentPageNumberSelector, 
  currentBirdIndexSelector,
  scoreSelector
} from '../../redux/selectors';
import birdsData from '../../birdsData';
import {randomNumberToSix} from '../../units';
import './style.scss';
import championClaps from '../../assets/audio/championClaps.mp3';
import fakeClaps from '../../assets/audio/fakeClaps.mp3';
import claps from '../../assets/audio/claps.mp3';
import fourFastClaps from '../../assets/audio/applause-4.mp3'


const NextPageButton = () => {
  const dispatch = useDispatch();
  const answers = useSelector(currentPageAnswersSelector);
  const pageNumber = useSelector(currentPageNumberSelector);
  const birdIndex = useSelector(currentBirdIndexSelector);
  const score = useSelector(scoreSelector);
  const randomNumber = randomNumberToSix();
  const givenCorrectAnswer = answers.includes(birdIndex);
  const lastPage = pageNumber === birdsData.length - 1;
  let whatClaps;

  if(score <= 10) whatClaps = fakeClaps;
  else if(score <= 20) whatClaps = claps;
  else if(score < 30) whatClaps = fourFastClaps;
  else whatClaps = championClaps;

  const handleClick = () => {
    if(lastPage) {
      dispatch(endOfGameAction(true))
      new Audio(whatClaps).play();
    } else {
      if(givenCorrectAnswer) {
        dispatch(setCurrentBirdIndexAction(randomNumber));
        dispatch(setPageNumberAction(1));
        dispatch(choosedBirdAction(false));
      } else return;
    }
  }

  const nextPageButtonClassName = classNames('nextPageButton', {
    readyToNextPage: givenCorrectAnswer
  })

  return(
    <div className={nextPageButtonClassName} onClick={handleClick}>
      <p>{lastPage ? 'Закончить игру' : 'Следующий уровень'}</p>
    </div>
  )
}

export default NextPageButton;