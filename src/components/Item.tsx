import React from 'react'
import ItemsInterface from './interfaces/ItemsInterface'

const Item = (props: ItemsInterface) => {
  
  return (
    <>
      <div className='img'>
        <img src={props.sprites.default} alt=""/>
      </div>
      <div className="entries">
        <ul className='list'>
          <li>Name: <p>{props.name}</p></li>
          <li>Id: <p>{props.id}</p></li>
          <li>Category: 
            {(props.category !== undefined) ? <p>{props.category.name}</p> : <p>"Error"</p> }
          </li>
          
        </ul>
      </div>
    </>
  )
}

export default Item