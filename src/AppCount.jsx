// import PropTypes from "prop-types"
import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [greeting, setGreeting] = useState()

  const handleAdd = () => {
    setCount(count + 1)
    console.log('interior', count)
  }
  console.log('Exterior', count)

  const handleSub = () => {
    setCount(count - 1)
    console.log('interior', count)
  }

  const handleInput = (e) => {
    setGreeting(e.target.value)
  }

  return (
    <div className="App">
      <h1>
        El valor actual es:
        {count}
      </h1>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <button type="button" onClick={handleSub}>
        Subtract
      </button>
      <input type="input" onChange={handleInput} />
      <h2>{greeting}</h2>
    </div>
  )
}
export default App
