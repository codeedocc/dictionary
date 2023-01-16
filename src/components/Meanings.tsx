import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Meanings: React.FC = () => {
  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
  })

  return (
    <>
      {data?.length && (
        <div className="results-box">
          <p className="title">Defenitions:</p>
          <ul className="content">
            {data[0].meanings.map((el, id) => {
              return <li key={id}>{el.definitions[0].definition}</li>
            })}
          </ul>
        </div>
      )}
    </>
  )
}

export default Meanings
