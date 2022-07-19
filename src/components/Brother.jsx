import React from 'react'
import Son from './Son'

const Brother = ({ greeting, onHandleMessage }) => {
  const texto = 'Soy el Brother'
  const handleClick = () => {
    onHandleMessage(texto)
  }
  const handleInput = (event) => {
    onHandleMessage(event.target.value)
  }
  return (
    <div>
      <h2>Soy el Hermano - {greeting}</h2>
      <input type="input" onChange={handleInput} />
      <button type="button" onClick={handleClick}>
        Enviar props
      </button>
      <Son mensage={greeting} setMensage={onHandleMessage} />
    </div>
  )
}
export default Brother
