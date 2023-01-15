import React from 'react'
import Example from './Info/Example'
import Meanings from './Info/Meanings'
import Synonym from './Info/Synonym'

const Results: React.FC = () => {
  return (
    <div className="meanings-container">
      <Meanings />
      <Example />
      <Synonym />
    </div>
  )
}

export default Results
