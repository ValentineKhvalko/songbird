import React from 'react';
import { useSelector } from 'react-redux';
import { currentPageNumberSelector, endOfGameSelector } from './redux/selectors';

import Header from './components/Header';
import CurrentQuestion from './components/CurrentQuestion';
import DescriptionOfBird from './components/DescriptionOfBird';
import PossibleAnswer from './components/PossibleAnswer';
import NextPageButton from './components/NextPageButton'; 
import EndOfGame from './components/EndOfGame';

import birdsData from './birdsData';
import './App.scss';

function App() {
  const currentPageNumber = useSelector(currentPageNumberSelector);
  const isGameOver = useSelector(endOfGameSelector);
  const currentPage = birdsData[currentPageNumber];
  
  return (
    <div className="App">
    {isGameOver ?
      <EndOfGame />
    : <div className='container'>
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
      }  
    </div> 
  );
}

export default App;
