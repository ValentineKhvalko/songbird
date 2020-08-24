import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {setPageNumberAction, choosedBirdAction, setCurrentBirdIndexAction} from '../../redux/actions';
import {givenAnswersSelector, currentPageNumberSelector, currentBirdIndexSelector} from '../../redux/selectors';
import {randomNumberToSix} from '../../units';
import './style.scss';


const NextPageButton = () => {

  const dispatch = useDispatch();
  const answers = useSelector(givenAnswersSelector);
  const pageNumber = useSelector(currentPageNumberSelector);
  const birdIndex = useSelector(currentBirdIndexSelector);
  const randomNumber = randomNumberToSix();

  const handleClick = () => {
    if(pageNumber === 5) return;
    else {
      if(answers[pageNumber].includes(birdIndex)) {
        console.log(randomNumber); 
        dispatch(setCurrentBirdIndexAction(randomNumber));
        dispatch(setPageNumberAction(1));
        dispatch(choosedBirdAction(false));
      } else return;
    }
  }

  return(
    <div className='nextPageButton' onClick={handleClick}>
      <p>Next Page</p>
    </div>
  )
}

export default NextPageButton;