import React from 'react'
import './Results.css'

const Results = props => {
  return (
    <div>
      <h4>{props.prevVal}</h4>
      <h3>{props.val}</h3>
    </div>
    
  )
}


export default Results