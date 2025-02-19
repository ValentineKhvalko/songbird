import React, { createRef } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

import { choosedBirdSelector } from '../../redux/selectors';
import './style.scss'

export default function DescriptionOfBird() {
  const bird = useSelector(choosedBirdSelector);
  const audioPlayer = createRef();

  const descriptionImg = {
    marginBottom: 10,
    width: 225,
    height: 140,
    borderRadius: 5,
    backgroundSize: 'cover',
    backgroundImage: `url(${bird.image})`,
    backgroundPosition: 'center'
  }

  return(
    <div className='description'>
      {bird ? 
      <div>
        <div className='shotDescription'>
          <div style={descriptionImg}></div>
          <div className='species'>
            <p>{ bird.name }</p>
            <p>{ bird.species }</p>
            <AudioPlayer 
              className='audioPlayer'
              src={bird.audio} 
              autoPlayAfterSrcChange={false}
              ref={audioPlayer}
            />
          </div>
        </div> 
        <div className='fullDescription'>
            <p>{bird.description}</p>
        </div>
      </div>   
      : <div className='rules'>
          <p>Прослушайте плеер и угадайте птицу.</p>
          <p>За угаданную с первого раза птицу вы получите 5 очков, с шестого — 0.</p>
        </div>}
    </div>
  )
}