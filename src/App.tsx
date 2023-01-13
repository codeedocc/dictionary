import React from 'react'
import Example from './components/Example'
import Header from './components/Header'
import Meanings from './components/Meanings'
import Synonym from './components/Synonym'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Meanings />
      <Example />
      <Synonym />
    </div>
  )
}

export default App
