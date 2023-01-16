import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Antonyms: React.FC = () => {
  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
  })

  return (
    <>
      {data?.length && (
        <>
          {data[0].meanings[0].antonyms.find((el) => el !== '') && (
            <div className="results-box">
              <p className="title">Antonyms:</p>
              {data[0].meanings[0].antonyms
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

export default Antonyms
