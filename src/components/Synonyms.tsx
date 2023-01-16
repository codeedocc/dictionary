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
        <>
          {data[0].meanings[0].synonyms.find((el) => el !== '') && (
            <div className="results-box">
              <p className="title">Synonyms:</p>
              {data[0].meanings[0].synonyms
                .filter((_, id) => id < 4)
                .map((word, id) => {
                  return (
                    <p className="content" key={id}>
                      <strong>{id + 1}</strong>. &nbsp;
                      {word}
                    </p>
                  )
                })}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Synonyms
