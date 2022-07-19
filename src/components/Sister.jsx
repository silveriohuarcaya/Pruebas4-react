import React, { useState } from 'react'

const Sister = ({ greeting, onHandleMessage }) => {
  const [message, setMessage] = useState()

  const texto = 'Soy la Sister'
  const handleClickProps = () => {
    onHandleMessage(texto)
  }
  const handleButtonInput = () => {
    onHandleMessage(message)
  }
  const handleInput = (event) => {
    setMessage(event.target.value)
  }
  return (
    <div>
      <h2>Hermana - {greeting}</h2>
      <input type="input" onChange={handleInput} />
      <button type="button" onClick={handleClickProps}>
        Enviar props
      </button>
      <button type="button" onClick={handleButtonInput}>
        Enviar Input
      </button>
    </div>
  )
}
export default Sister
