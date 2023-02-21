import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import IMG from '../assets/react.svg'

const Pokemon = () => {
  return (
    <>
      <div className='img'>
        <img src={IMG} alt=""/>
      </div>
      <div className="field">
        <h2>Hi</h2>
      </div>
    </>
  )
}

export default Pokemon