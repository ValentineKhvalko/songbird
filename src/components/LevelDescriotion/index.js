import React from 'react'
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { currentPageNumberSelector } from '../../redux/selectors';
import './style.scss';

const LevelDescription = (props) => {
  const pageIndex = useSelector(currentPageNumberSelector);
  const levelStyles = classNames('level', {
    currentLevel: props.index === pageIndex
  });

  return(
    <div className={levelStyles}>{props.level}</div>
  )
}

export default LevelDescription;