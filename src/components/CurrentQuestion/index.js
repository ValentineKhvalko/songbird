import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'


import defaultImage from '../../assets/img/kisspng-caregiver-logo-songbird-clip-art-caregiver-pictures-5ab26536c28d78.4179000015216407587969.jpg';
import './style.scss'


export default function CurrentQuestion(props) {

  const bird = props.currentBird;
  
  return (
    <div className='currentQuestion'>
      <img src = {bird.image || defaultImage } className='currentImg' alt= {bird.name}></img>
      <div className='currentQuestionDescription'> 
        <p>{bird.name}</p>
        <AudioPlayer className='player' src= { bird.audio}/>
      </div>
    </div>
  )
}