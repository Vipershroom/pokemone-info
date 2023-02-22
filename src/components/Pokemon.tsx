import React from 'react'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/shared.scss'
import IMG from '../assets/pikachutest.png'

const Pokemon = (props: PokemonInterface) => {
  console.log(props.moves)

  const handleOverflow = () => {
    let new_arr = []
    let counter = 0
    for (let i of props.moves) {
      if (counter === 4) {
        break
      }
      new_arr.push(i.move.name)
      counter += 1
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
              <React.Fragment>
              <p>{obj.type.name}</p>
              </React.Fragment>
            )
          })}</li>
        </ul>
      </div>
    </>
  )
}

export default Pokemon