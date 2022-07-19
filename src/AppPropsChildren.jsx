import React from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Title from './components/Title'
import Button from './components/Button'

const profile = {
  name: 'Wilfredo Huarcaya',
  age: '51',
  isTeacher: true
}

const boleano = true

const App = () => (
  <div className="App">
    <HelloWorld
      name="Silverio Huarcaya"
      age={51}
      isTeacher={boleano}
      hobbies={['coding', 'reading', 'listening to music']}
      profile={profile}
      sayHello={() => console.log('Hello')}
      component={<Title />}
    >
      <Title />
    </HelloWorld>
    <Title autos={2} año={2020} propiedades="Playa">
      <p>Esto es un children</p>
      <h3>prop2</h3>
    </Title>
    <Button>
      <div>
        <h2>Guardar Button</h2>
        <h3>casa</h3>
      </div>
    </Button>
  </div>
)
export default App
