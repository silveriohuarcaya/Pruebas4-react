import React from 'react'

const Titles = ({ name, getValue }) => {
  const textoHijo = name
  const texto = ' y yo soy el hijo'
  const handleClick = () => {
    getValue(texto)
  }
  return (
    <div>
      <h1>Titulo - {textoHijo}</h1>
      <button type="button" onClick={handleClick}>
        Haga click aqui (Estoy en Titles)
      </button>
    </div>
  )
}
export default Titles
