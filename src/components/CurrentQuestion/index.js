import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

import './style.scss'
import defaultImage from '../../assets/img/4013313a-2c26-49ba-8e70-ff5cdb2bb295.jpg'
import { useSelector } from 'react-redux';
import { currentBirdSelector, isCorrectAnswerSelector } from '../../redux/selectors';

export default function CurrentQuestion() {
  const bird = useSelector(currentBirdSelector);
  const isCorrectAnswer = useSelector(isCorrectAnswerSelector);

  const image = isCorrectAnswer ? bird.image : defaultImage;
  const birdName = isCorrectAnswer ? bird.name : '********';

  return (
    <div className='currentQuestion'>
      <img src={image} className='currentImg' alt={birdName}></img>
      <div className='currentQuestionDescription'> 
        <p>{birdName}</p>
        <AudioPlayer className='player' src={bird.audio}/>
      </div>
    </div>
  )
}