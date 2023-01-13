import React from 'react'
import Example from './components/Example'
import Header from './components/Header'
import Meanings from './components/Meanings'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Meanings />
      <Example />
    </div>
  )
}

export default App
