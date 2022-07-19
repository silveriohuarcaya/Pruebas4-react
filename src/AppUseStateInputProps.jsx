import React, { useState } from 'react'
import './App.css'

import Brother from './components/Brother'
import Sister from './components/Sister'

const App = () => {
  const [message, setMessage] = useState('Papa')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <Brother greeting={message} onHandleMessage={handleMessage} />
      <Sister greeting={message} onHandleMessage={handleMessage} />
    </div>
  )
}
export default App
