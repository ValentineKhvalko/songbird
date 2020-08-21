import { createAction } from 'redux-actions';

export const initAppAction = createAction('@@APP/INIT');

export const isCorrectAnswerAction = createAction('@@ISCORRECTANSWER');

export const setPageNumberAction = createAction('@@SET/PAGENUMBER'); 

export const choosedBirdAction = createAction('@@SET/CHOOSEDBIRD');

export const setCurrentBirdIndexAction = createAction('@@SET/BIRDINDEX');

