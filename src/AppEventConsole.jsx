import React from 'react'
import './App.css'
import Titles from './components/Titles'
import Description from './components/Description'

const App = () => {
  const textoPadre = 'Estoy en el padre'

  const getValue = (value) => {
    console.log('estoy en el padre ', value)
  }
  /* const handleSelectChange = (event) => {
    console.log(event.target.value)
  } */
  /* const handleInputChange = (event) => {
    console.log(event.target.value)
  } */

  const handleChange = ({ target }) => {
    const { name } = target
    const { value } = target
    console.log(name, value)
  }
  const handleClick = () => {
    console.log(textoPadre)
  }

  return (
    <div className="App">
      <Titles name={textoPadre} getValue={getValue} />
      <Description description="hola" />
      <input type="text" name="input" onChange={handleChange} />
      <select name="option" onChange={handleChange}>
        <option value="1">Selection 1</option>
        <option value="2">Selection 2</option>
        <option value="3">Selection 3</option>
      </select>
      <button type="button" onClick={handleClick}>
        Click me (Estoy en el Padre)
      </button>
    </div>
  )
}
export default App
