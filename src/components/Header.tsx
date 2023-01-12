import React from 'react'

const Header = () => {
  return (
    <div className="container-header">
      <div className="header-box">
        <p className="title">English dictionary</p>
        <p className="description">Find definitions for word</p>
        <div className="header-input">
          <input type="text" placeholder="Start typing..." />
          <button>Find</button>
        </div>
      </div>
    </div>
  )
}

export default Header
