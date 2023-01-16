import React, { useRef } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { useLazySearchWordQuery } from '../store/dictionary/dictionary.api'
import Antonyms from './Antonyms'
import Audio from './Audio'
import Definitions from './Definitions'
import Synonyms from './Synonyms'

const Search: React.FC = () => {
  const { word } = useAppSelector((state) => state.dictionary)
  const { setWord, setInfo, setIsReady } = useActions()

  const [fetchWords, { isLoading, isError, data }] = useLazySearchWordQuery()

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
          {!isError && data?.length && <Audio />}
        </div>
      </div>

      {isLoading ? (
        <p className="status">Loading...</p>
      ) : isError ? (
        <p className="status">Wrong word, please try again...</p>
      ) : (
        <div className="results">
          <Definitions />
          <Synonyms />
          <Antonyms />
        </div>
      )}
    </>
  )
}

export default Search
