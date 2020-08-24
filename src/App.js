import React from 'react';

import Header from './components/Header';
import CurrentQuestion from './components/CurrentQuestion';
import DescriptionOfBird from './components/DescriptionOfBird';
import PossibleAnswer from './components/PossibleAnswer';
import NextPageButton from './components/NextPageButton'; 

import birdsData from './birdsData';

import useInit from './hooks/useInit';
import { initAppAction } from './redux/actions';
import { useSelector } from 'react-redux';
import { currentPageNumberSelector } from './redux/selectors';

import './App.scss';

function App() {
  useInit(initAppAction);

  const currentPageNumber = useSelector(currentPageNumberSelector);
  const currentPage = birdsData[currentPageNumber];

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
      <NextPageButton />
    </div> 
  );
}

export default App;
