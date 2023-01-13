import React from 'react'
import Example from './components/Example'
import Header from './components/Header'
import Meanings from './components/Meanings'
import Synonym from './components/Synonym'
import { useActions } from './hooks/actions'
import { useAppSelector } from './hooks/redux'

const App: React.FC = () => {
  const { example } = useAppSelector((state) => state.dictionary)
  const { setExample } = useActions()

  console.log(example)

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
