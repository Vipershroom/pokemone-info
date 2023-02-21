import { useState } from 'react'
import Form from './Form'
import Pokemon from './Pokemon'
import Item from './Item'

interface Output {
  search: string,
  select: string,
}

function App() {
  const [state, setState] = useState({
    search: 'clefairy',
    select: "Pokemon",
  })
  const [toggle, setToggle] = useState(true)
  const handleForm = (output: Output) => {
    output.search = output.search.toLowerCase()
    console.log(output)
    setState(output)
    console.log(state)
  }
  return (
    <div className='container'>
      <div className="card">
        {(state.select === "Pokemon") ? <Pokemon /> : <Item /> }
      </div>
      <Form onSubmit={handleForm}/>
    </div>
  )
}

export default App
