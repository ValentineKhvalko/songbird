import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {currentBirdIndexSelector, currentPageNumberSelector, currentPageAnswersSelector} from '../../redux/selectors'
import {giveAnAnswerAction, choosedBirdAction} from '../../redux/actions'

import birdsData from '../../birdsData';
import correctSound from '../../assets/audio/correct.mp3';
import errorSound from '../../assets/audio/error.mp3';
import './style.scss'

export default function PossibleAnswer(props) {

  const dispatch = useDispatch();
  const currentPageIndex = useSelector(currentPageNumberSelector);
  const currentBirdIndex = useSelector(currentBirdIndexSelector);
  const givenAnswers = useSelector(currentPageAnswersSelector);

  const handleClick = () => {
    dispatch(choosedBirdAction(birdsData[currentPageIndex][props.index]));
    if(!givenAnswers.includes(props.index)) {
      dispatch(giveAnAnswerAction({
        pageIndex: currentPageIndex,
        birdIndex: props.index
      }))
      if(props.index === currentBirdIndex ) {
        new Audio(correctSound).play();
      } else {
        new Audio(errorSound).play();
      }
    }
  }

  return (
    <div className='possibleAnswer' onClick={handleClick}>
      <p>{props.name}</p>
    </div>
  )
}