import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { useLazySearchWordQuery } from '../store/dictionary/dictionary.api'
import Results from './Results'

const Search: React.FC = () => {
  const { word } = useAppSelector((state) => state.dictionary)
  const { setWord } = useActions()

  const [fetchWords, { isLoading, isError, data }] = useLazySearchWordQuery()

  return (
    <>
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
            <button onClick={() => fetchWords(word)}>Find</button>
          </div>
          {!isError && data?.length && (
            <p className="result">Result for: {data[0].word}</p>
          )}
        </div>
      </div>

      {isLoading ? <p>Loading...</p> : isError ? <p>Error</p> : <Results />}
    </>
  )
}

export default Search
