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
  const correctAnswer = props.index === currentBirdIndex;
  const maxPoints = 5;

  const handleClick = () => {
    dispatch(choosedBirdAction(birdsData[currentPageIndex][props.index]));
    if(!isContainCurrentIndex && !givenAnswers.includes(currentBirdIndex)) {
      dispatch(giveAnAnswerAction({
        pageIndex: currentPageIndex,
        birdIndex: props.index
      }))
      if(correctAnswer) {
        dispatch(setScoreAction(maxPoints - givenAnswers.length))
        new Audio(correctSound).play();
      } else {
        new Audio(errorSound).play();
      }
    }
  }

  const btnClass = classNames('btn',{
    error: isContainCurrentIndex && !correctAnswer,
    correct: isContainCurrentIndex && correctAnswer
  })
  
  return (
    <div className='possibleAnswer' onClick={handleClick}>
      <div className={btnClass}></div>
      <p>{props.name}</p>
    </div>
  )
}