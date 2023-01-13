import React from 'react'

const Header = () => {
  return (
    <div className="container-header">
      <div className="header-box">
        <p className="title">Dictionary</p>
        <p className="description">Find definitions for word</p>
        <div className="header-input">
          <input type="text" placeholder="Start typing..." />
          <button>Find</button>
        </div>
        <p className="result">Result for: happy</p>
      </div>
    </div>
  )
}

export default Header
