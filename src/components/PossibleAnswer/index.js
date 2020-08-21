import React, {useState, useEffect, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {currentBirdIndexSelector, currentPageNumberSelector} from '../../redux/selectors'
import {isCorrectAnswerAction, choosedBirdAction} from '../../redux/actions'
import birdsData from '../../birdsData';
import './style.scss'

export default function PossibleAnswer(props) {

  const dispatch = useDispatch();

  const currentPageNumber = useSelector(currentPageNumberSelector);
  const currentBirdIndex = useSelector(currentBirdIndexSelector);

  const handleClick = () => {
    dispatch(choosedBirdAction(birdsData[currentPageNumber][props.index]));
    if(props.index === currentBirdIndex) {
      dispatch(isCorrectAnswerAction(true))
    } else {
      console.log(false);
    }
  }

  return (
    <div className='possibleAnswer' onClick={handleClick}>
      <p>{props.name}</p>
    </div>
  )
}