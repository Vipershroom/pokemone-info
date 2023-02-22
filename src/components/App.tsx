import { useEffect, useState } from 'react'
import Form from './Form'
import Pokemon from './Pokemon'
import Item from './Item'
import PokemonInterface from './interfaces/PokemonInterface'
import './styles/App.scss'

interface Output {
  search: string,
  select: string,
}

function App() {

  const [state, setState] = useState({
    search: 'clefairy',
    select: "Pokemon",
  })
  

  const handleForm = (output: Output) => {
    output.search = output.search.toLowerCase()
    setState(output)
    console.log(state)
  }
  const url = ["https://pokeapi.co/api/v2/pokemon/", "https://pokeapi.co/api/v2/item/"]
  const [render, setRender] = useState<PokemonInterface>({
    name: '',
    abilities: [],
    moves: [],
    id: 0,
    types: [],
    sprites: {
      front_default: ''
    }
  })

  useEffect(() => {
    if (state.select === "Pokemon") {
      const data = getData(url[0] + state.search)
      data.then((response: PokemonInterface) => {
        if (response === undefined) {
          setRender({
            name: 'Not found',
            abilities: [],
            moves: [],
            id: 0,
            types: [],
            sprites: {
              front_default: ''
            }
          })
          console.log(render)
        }
        const poke: PokemonInterface = {
          name: response.name,
          abilities: response.abilities,
          moves: response.moves,
          id: response.id,
          types: response.types,
          sprites: {
            front_default: response.sprites.front_default
          }
        }
        console.log(poke)
        setRender(poke) 
      })
    }
  }, [state])

  async function getData(url: string) {
    try {
      const response = await fetch(url)
      return await response.json()
    } catch {
      console.log("ERROR")
    }
  }
  
  return (
    <div className='container'>
      <div className="card">
        {(state.select === "Pokemon") ? <Pokemon {...render}/> : <Item /> }
      </div>
      <div className="form-component">
        <Form onSubmit={handleForm}/>
      </div>
    </div>
  )
}

export default App
