import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  console.log(props.moves)

  const handleOverflow = () => {
    let new_arr = []
    for (let i = 0; i < 4; i++) {
      new_arr.push(props.moves[i].move.name)
    }
    return new_arr
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