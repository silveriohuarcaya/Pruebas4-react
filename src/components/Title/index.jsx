import React from 'react'

const Title = (props) => {
  const { año, autos, propiedades, children } = props

  return (
    <div className="div">
      {children}
      <p>{año}</p>
      <p>{propiedades}</p>
      <p>{autos}</p>
      <h3>Esta casa Title</h3>
    </div>
  )
}
export default Title
