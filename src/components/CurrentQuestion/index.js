import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './style.scss'
import defaultImage from '../../assets/img/defaultBird.jpg'
import { useSelector } from 'react-redux';
import { currentBirdSelector, currentPageAnswersSelector, currentBirdIndexSelector } from '../../redux/selectors';

export default function CurrentQuestion() {
  const bird = useSelector(currentBirdSelector);
  const birdIndex = useSelector(currentBirdIndexSelector);
  const currentAnswers = useSelector(currentPageAnswersSelector);

  const image = currentAnswers.includes(birdIndex) ? bird.image : defaultImage;
  const birdName = currentAnswers.includes(birdIndex) ? bird.name : '********';

  const styleImage = {
    marginBottom: 10,
    width: 225,
    height: 140,
    borderRadius: 5,
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center'
  }

  return (
    <div className='currentQuestion'>
      <div style={styleImage} ></div>
      <div className='currentQuestionDescription'> 
        <p>{birdName}</p>
        <AudioPlayer className='audioPlayer' src={bird.audio} autoPlayAfterSrcChange={false}/>
      </div>
    </div>
  )
}