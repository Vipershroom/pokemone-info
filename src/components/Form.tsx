import React, { useState } from 'react'

interface onSubmit {
    onSubmit: Function
}

const Form = (props: onSubmit) => {
    const [input, setInput] = useState({
        search: '',
        select: 'Pokemon',
    })

    const addHyphen = (str: string) => {
        let new_str = ""
        for (let i of str) {
          if (i === " ") {
            new_str += "-"
            continue
          }
          new_str += i
        }
        return new_str
      }
    
      
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.search === "" || input.search === " ") {
            return
        }
        setInput({
            ...input,
            search: addHyphen(input.search),
        })
        console.log(input.select)
        props.onSubmit({
            select: input.select,
            search: addHyphen(input.search)
        })
        setInput({
            search: '',
            select: input.select,
        })
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={input.search} onChange={(e) => {setInput({
            ...input,
            search: e.target.value
        })}} />
        <select name="" id="" onChange={(e) => {setInput({
            ...input,
            select: e.target.value
        })}}>
            <option value="Pokemon">Pokemon</option>
            <option value="Items">Items</option>
        </select>
        <button>Search</button>
        
    </form>
  )
}

export default Form