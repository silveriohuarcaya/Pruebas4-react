import React from 'react'

const HelloWorld = (props) => {
  const {
    name,
    age,
    hobbies = [],
    profile,
    sayHello,
    component,
    children
  } = props

  if (sayHello) {
    sayHello()
  }

  const text = profile
    ? `My name is ${profile.name} and I am ${profile.age} years aold.`
    : ''

  return (
    <div className="hello-world">
      <h1>Hello, World!</h1>
      {children}
      <p>{name}</p>
      <p>{age}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={hobby[index]}>{hobby}</li>
        ))}
      </ul>
      <p>{text}</p>
      {component}
    </div>
  )
}
export default HelloWorld
