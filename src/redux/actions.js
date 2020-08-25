import { createAction } from 'redux-actions';

export const initAppAction = createAction('@@APP/INIT');

export const giveAnAnswerAction = createAction('@@ISCORRECTANSWER');

export const setPageNumberAction = createAction('@@SET/PAGENUMBER'); 

export const choosedBirdAction = createAction('@@SET/CHOOSEDBIRD');

export const setCurrentBirdIndexAction = createAction('@@SET/BIRDINDEX');

export const setScoreAction = createAction('@@SET/SCORE');

