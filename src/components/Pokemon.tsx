import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  console.log(props.moves)

  const handleOverflow = () => {
    return [props.moves[0].move.name,
    props.moves[1].move.name,
    props.moves[2].move.name,
    props.moves[3].move.name]
  }

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
          <li>Moves: {handleOverflow().map((obj) => {
            return <p>{obj}</p>
          })}</li>
          <li>Types: {props.types.map((obj) => {
            return (
              <p>{obj.type.name}</p>
            )
          })}</li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon