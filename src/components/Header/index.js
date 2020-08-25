import React from 'react';

import './style.scss'
import { useSelector } from 'react-redux';
import { scoreSelector } from '../../redux/selectors';
import LevelDescription from '../LevelDescriotion';

const levelNavigation = ['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'];

export default function Header() {
  const score = useSelector(scoreSelector);

  return (
    <div className='header'>
      <div className='scoreInfoAndLogo'>
        <div className='logo'></div>
        <div><p>Счёт: {score}</p></div>
      </div>
      <div className='levelNavigation'>
        {levelNavigation.map((level, index) => {
          return <LevelDescription index={index} key={index} level={level}/>
        })}
      </div>
    </div>
  )
}

