import React, { useState } from 'react'

interface onSubmit {
    onSubmit: Function
}

const Form = (props: onSubmit) => {
    const [input, setInput] = useState({
        search: '',
        select: 'Pokemon',
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.search === "" || input.search === " ") {
            return
        }
        props.onSubmit(input)
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