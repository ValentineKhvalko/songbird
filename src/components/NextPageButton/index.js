import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames'

import {setPageNumberAction, choosedBirdAction, setCurrentBirdIndexAction} from '../../redux/actions';
import {currentPageAnswersSelector, currentPageNumberSelector, currentBirdIndexSelector} from '../../redux/selectors';
import {randomNumberToSix} from '../../units';
import './style.scss';


const NextPageButton = () => {

  const dispatch = useDispatch();
  const answers = useSelector(currentPageAnswersSelector);
  const pageNumber = useSelector(currentPageNumberSelector);
  const birdIndex = useSelector(currentBirdIndexSelector);
  const randomNumber = randomNumberToSix();
  const givenCorrectAnswer = answers.includes(birdIndex);

  const handleClick = () => {
    if(pageNumber === 5) return;
    else {
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
      <p>Следующий уровень</p>
    </div>
  )
}

export default NextPageButton;