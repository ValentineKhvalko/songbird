import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scoreSelector } from '../../redux/selectors';

import { 
  setPageNumberAction, 
  giveAnAnswerAction, 
  choosedBirdAction, 
  setCurrentBirdIndexAction, 
  setScoreAction,
  endOfGameAction 
} from '../../redux/actions';
import { randomNumberToSix } from '../../units'
import './style.scss'

const EndOfGame = () => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const randomNumber = randomNumberToSix();
  const lastScoreSimbol = score.toString().slice(-1);
  const scoreText = 0 < lastScoreSimbol && lastScoreSimbol < 5 ? 'очка' : 'очков';
  let birdKnowledgeSkill;

  if(score === 0) birdKnowledgeSkill = 'Да вы вообще знаете как выглядят птица?!';
  else if(score <= 10) birdKnowledgeSkill = 'Ну ладно, пару птиц угадали.';
  else if(score <= 20) birdKnowledgeSkill = 'А вы не плохо разбираетесь в птицах!';
  else if(score < 30) birdKnowledgeSkill = 'Да вы просто знаток птиц!';
  else birdKnowledgeSkill = '30?!?!? Вы знаете птиц больше чем мы!!! Пойдете к нам работать??';

  const handleClick = () => {
    dispatch(giveAnAnswerAction('reset'));
    dispatch(setPageNumberAction('reset'));
    dispatch(setScoreAction('reset'));
    dispatch(choosedBirdAction(false));
    dispatch(endOfGameAction(false));
    dispatch(setCurrentBirdIndexAction(randomNumber));
  }

  return (
    <div className='endOfGame'>
      <div className='modalWindow'>
        <p>Вы набрали {score} {scoreText}.</p>
        <p>{birdKnowledgeSkill}</p>
        <div className='toStartPageBtn' onClick={handleClick}>На главную</div>
      </div>
    </div>
  )
}

export default EndOfGame;