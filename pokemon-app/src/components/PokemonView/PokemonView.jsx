import React from 'react'
import './PokemonView.css'

const PokemonView = ({name}) => {
  return (
    <div className='ViewBox'>
        <h3>{name}</h3>
    </div>
  )
}

export default PokemonView