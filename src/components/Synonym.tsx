import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Synonym: React.FC = () => {
  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
  })

  console.log(data)

  return (
    <>
      {data?.length && (
        <div className="results-box">
          <p className="title">Synonym:</p>
          <ul className="content">
            {data[0].meanings.map((el) =>
              el.synonyms
                .filter((_, id) => id < 5)
                .map((word, id) => {
                  return <li key={id}>{word}</li>
                })
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default Synonym
