import { useEffect, useState } from 'react'
import Form from './Form'
import Pokemon from './Pokemon'
import Item from './Item'
import PokemonInterface from './interfaces/PokemonInterface'
import ItemsInterface from './interfaces/ItemsInterface'
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

  const [isPokemon, setIsPokemon] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [render, setRender] = useState<PokemonInterface | ItemsInterface>({
    name: '',
    abilities: [],
    moves: [],
    id: 0,
    types: [],
    sprites: {
      front_default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
    }
  })
  const url = ["https://pokeapi.co/api/v2/pokemon/", "https://pokeapi.co/api/v2/item/"]

  const handleForm = (output: Output) => {
    output.search = output.search.toLowerCase()
    setState(output)
    if (output.select === "Pokemon") {
      setIsLoading(true)
      setIsPokemon(true)
    } else {
      setIsLoading(true)
      setIsPokemon(false)
    }
    
    
  }

  useEffect(() => {
    console.log(state)
    if (isPokemon) {
      const data = getData(url[0] + state.search)
      
      data.then((response: PokemonInterface) => {
        console.log(response)
        if (response === undefined) {
          setRender({
            name: '',
            abilities: [],
            moves: [],
            id: 0,
            types: [],
            sprites: {
              front_default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
          })
          setRender({
            ...render,
            name: "Not found",
            sprites: {
              front_default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
              default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
          })
          return
        }
        setRender({
          name: '',
          abilities: [],
          moves: [],
          id: 0,
          types: [],
          sprites: {
            front_default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
        })
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
        setRender(poke) 
        setIsLoading(false)
        setIsPokemon(false)
        setIsPokemon(true)
      })
    } else {
      getData(url[1] + state.search).then((response: ItemsInterface) => {
        if (response === undefined) {
          setRender({
            ...render,
            name: "Not found",
            sprites: {
              front_default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
              default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
          })
          return
        }
        setRender({
          name: response.name,
          id: response.id,
          sprites: {
            default: response.sprites.default
          },
          category: {
            name: response.category.name
          }
        })
      })
      setIsLoading(false)
      setIsPokemon(true)
      setIsPokemon(false)
    }
  }, [state])

  async function getData(url: string) {
    try {
      console.log(url)
      const response = await fetch(url)
      return await response.json()
    } catch {
      console.log("ERROR handling request to api")
    }
  }
  
  return (
    <div className='container'>
      <div className="card">
        {(isPokemon && !isLoading) ? <Pokemon {...render as PokemonInterface}/> : <Item {...render as ItemsInterface}/> }
      </div>
      <div className="form-component">
        <Form onSubmit={handleForm}/>
      </div>
    </div>
  )
}

export default App
