import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Synonyms: React.FC = () => {
  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
  })

  return (
    <>
      {data?.length && (
        <div className="results-box">
          <p className="title">Synonyms:</p>
          <ul className="content">
            {data[0].meanings.map((el) =>
              el.synonyms
                .filter((_, id) => id < 4)
                .map((word, id) => {
                  return (
                    <li key={id}>
                      <strong>{id + 1}</strong>. &nbsp;{word}
                    </li>
                  )
                })
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default Synonyms
