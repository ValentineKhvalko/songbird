import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {currentBirdIndexSelector, currentPageNumberSelector, currentPageAnswersSelector} from '../../redux/selectors'
import {giveAnAnswerAction, choosedBirdAction, setScoreAction} from '../../redux/actions'

import birdsData from '../../birdsData';
import correctSound from '../../assets/audio/correct.mp3';
import errorSound from '../../assets/audio/error.mp3';
import './style.scss'

export default function PossibleAnswer(props) {

  const dispatch = useDispatch();
  const currentPageIndex = useSelector(currentPageNumberSelector);
  const currentBirdIndex = useSelector(currentBirdIndexSelector);
  const givenAnswers = useSelector(currentPageAnswersSelector);
  const isContainCurrentIndex = givenAnswers.includes(props.index);
  const correctAnser = props.index === currentBirdIndex;

  const handleClick = () => {
    dispatch(choosedBirdAction(birdsData[currentPageIndex][props.index]));
    if(!isContainCurrentIndex && !givenAnswers.includes(currentBirdIndex)) {
      dispatch(giveAnAnswerAction({
        pageIndex: currentPageIndex,
        birdIndex: props.index
      }))
      if(correctAnser) {
        dispatch(setScoreAction(5 - givenAnswers.length))
        new Audio(correctSound).play();
      } else {
        new Audio(errorSound).play();
      }
    }
  }

  const btnClass = classNames('btn',{
    error: isContainCurrentIndex && !correctAnser,
    correct: isContainCurrentIndex && correctAnser
  })
  
  return (
    <div className='possibleAnswer' onClick={handleClick}>
      <div className={btnClass}></div>
      <p>{props.name}</p>
    </div>
  )
}