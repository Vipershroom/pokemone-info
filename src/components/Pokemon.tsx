import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import IMG from '../assets/react.svg'

const Pokemon = () => {
  return (
    <>
      <div className='img'>
        <img src={IMG} alt=""/>
      </div>
      <div className="entries">
        <ul>
          <li>Hi</li>
          <li>Bye</li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon