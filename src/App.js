import React, { useState, useMemo } from 'react';

import Header from './components/Header';
import CurrentQuestion from './components/CurrentQuestion';
import DescriptionOfBird from './components/DescriptionOfBird';
import PossibleAnswer from './components/PossibleAnswer';
import birdsData from './birdsData';
import useInit from './hooks/useInit';
import { initAppAction, answersAction } from './redux/actions';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';

import { currentPageNumberSelector, currentBirdIndexSelector, currentBirdSelector } from './redux/selectors';

function App() {

  useInit(initAppAction);
  // const dispatch = useDispatch();

  const currentPageNumber = useSelector(currentPageNumberSelector);
  // const currentBirdIndex = useSelector(currentBirdIndexSelector);
  const currentPage = birdsData[currentPageNumber];
  // const currentBird = useSelector(currentBirdSelector);

  return (
    <div className="App">
      <Header />
      <CurrentQuestion />
      <div className='main'>
        <div className = 'col'>
          { currentPage.map((el, index) => {
            return <PossibleAnswer
              name={el.name}
              index={index}
              key={el.id} 
            />
          })}
        </div>
        <div className='col'>
        <DescriptionOfBird/>
        </div>
      </div>
    </div> 
  );
}

export default App;
