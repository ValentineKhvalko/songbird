import React from 'react'
import './style.scss'

export default function PossibleAnswer(props) {
  return (
    <div className='possibleAnswer'>
      <p>{props.name}</p>
    </div>
  )
}