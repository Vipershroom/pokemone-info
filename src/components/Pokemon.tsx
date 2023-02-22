import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  return (
    <>
      <div className='img'>
        <img src={props.sprites.front_default} alt=""/>
      </div>
      <div className="entries">
        <ul className='list'>
          <li>Name: </li>
          <li>Id: </li>
          <li>Abilities: </li>
          <li>Moves: </li>
          <li>Types: </li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon