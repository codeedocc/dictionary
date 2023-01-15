import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { useLazySearchWordQuery } from '../store/dictionary/dictionary.api'
import Results from './Results'

const Search: React.FC = () => {
  const { word } = useAppSelector((state) => state.dictionary)
  const { setWord, setInfo, setIsReady } = useActions()

  const [fetchWords, { isLoading, isError, data }] = useLazySearchWordQuery()

  console.log(data)

  const clickHandler = (word: string) => {
    setInfo(word)
    setIsReady(true)

    return fetchWords(word)
  }

  return (
    <>
      <div className="search">
        <div className="search-box">
          <p className="title">Dictionary</p>
          <p className="text">Find definitions for word</p>
          <div className="input">
            <input
              type="text"
              placeholder="Start typing..."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={() => clickHandler(word)}>Find</button>
          </div>

          {!isError && data?.length && (
            <p className="result">Result for: {data[0].word}</p>
          )}
        </div>
      </div>

      {isLoading ? (
        <p className="status">Loading...</p>
      ) : isError ? (
        <p className="status">Wrong word, please try again...</p>
      ) : (
        <div className="results">
          <Results />
        </div>
      )}
    </>
  )
}

export default Search
