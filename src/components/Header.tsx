import React from 'react'
import { useActions } from '../hooks/actions'
import { useDebounce } from '../hooks/debounce'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Header = () => {
  const { word } = useAppSelector((state) => state.dictionary)
  const { setWord } = useActions()
  const debounced = useDebounce(word)

  const { isLoading, isError, data } = useSearchWordQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  console.log(data)

  return (
    <div className="container-header">
      <div className="header-box">
        <p className="title">Dictionary</p>
        <p className="description">Find definitions for word</p>
        <div className="header-input">
          <input
            type="text"
            placeholder="Start typing..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button>Find</button>
        </div>
        {isError ? (
          <p>We cant find this word...</p>
        ) : (
          <p className="result">Result for: happy</p>
        )}
      </div>
    </div>
  )
}

export default Header
