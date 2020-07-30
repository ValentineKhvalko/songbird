import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

import defaultImage from '../../assets/img/4013313a-2c26-49ba-8e70-ff5cdb2bb295.jpg';
import './style.scss'

export default function DescriptionOfBird(props) {

  const bird = props.currentBird;

  return(
    <div className='description'>
      <div className='shotDescription'>
        <img className='descriptionImg' src = {bird.image || defaultImage} alt='current bird'></img>
        <div className='species'>
          <p>{ bird.name }</p>
          <p>{ bird.species }</p>
          <AudioPlayer className='player' src= { bird.audio}/>
        </div>
      </div>
      <div className='fullDescription'>
        <p>{bird.description}</p>
      </div>
    </div>
  )
}