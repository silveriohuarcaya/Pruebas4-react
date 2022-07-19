import React from 'react'

const Son = ({ mensage, setMensage }) => {
  const texto = 'Soy el Son'
  const handleClick = () => {
    setMensage(texto)
  }
  return (
    <div>
      <h3>Soy el Hijo - {mensage}</h3>
      <button type="button" onClick={handleClick}>
        Enviar props
      </button>
    </div>
  )
}
export default Son
