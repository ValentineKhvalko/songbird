import React, { useState } from 'react';

import Header from './components/Header';
import CurrentQuestion from './components/CurrentQuestion';
import DescriptionOfBird from './components/DescriptionOfBird';
import PossibleAnswer from './components/PossibleAnswer';
import birdsData from './birdsData';
import './App.scss';



function App() {

  const [currentNumberPage, setCurrentNumberPage] = useState(0)
  const currentPage = birdsData[currentNumberPage];
  const currentBird = currentPage[Math.floor(Math.random() * 6)];


  const listBirds = currentPage.map(el => {
    return <PossibleAnswer name={el.name} key={el.id}/>
  })

  return (
    <div className="App">
      <Header />
      <CurrentQuestion currentBird={currentBird}/>
      <div className='main'>
        <div className = 'answerOptions'>
          {listBirds}
        </div>
        <DescriptionOfBird currentBird={currentBird}/>
      </div>
    </div>
  );
}

export default App;
