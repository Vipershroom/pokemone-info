import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  console.log(props.abilities)

  const handleOverflow = (props: PokemonInterface) => {
    let new_arr = []
    for (let i = 0; i < 4; i++) {
      new_arr.push(props.moves[i].move)
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
          <li>Moves: {handleOverflow(props).map((obj) => {
            return <p>{obj.name}</p>
          })}</li>
          <li>Types: </li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon