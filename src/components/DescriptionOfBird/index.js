import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import { useSelector } from 'react-redux';

import { choosedBirdSelector } from '../../redux/selectors';
import './style.scss'

export default function DescriptionOfBird() {
  const bird = useSelector(choosedBirdSelector);

  return(
    <div className='description'>
      {bird ? 
      <div>
        <div className='shotDescription'>
          <img className='descriptionImg' src = {bird.image} alt='current bird'></img>
          <div className='species'>
            <p>{ bird.name }</p>
            <p>{ bird.species }</p>
            <AudioPlayer className='player' src= { bird.audio} autoPlay={false}/>
          </div>
        </div> 
        <div className='fullDescription'>
            <p>{bird.description}</p>
        </div>
      </div>   
      : <div className='rules'><p>Прослушайте плеер и выберете птицу</p></div>}
    </div>
  )
}