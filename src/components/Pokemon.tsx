import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  console.log(props.abilities)
  return (
    <>
      <div className='img'>
        <img src={props.sprites.front_default} alt=""/>
      </div>
      <div className="entries">
        <ul className='list'>
          <li>Name: {props.name}</li>
          <li>Id: {props.id}</li>
          <li>Abilities: 
            {props.abilities.map((obj) => {
              return (
                <p>{obj.ability.name}</p>
              )
            })}
          </li>
          <li>Moves: </li>
          <li>Types: </li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon