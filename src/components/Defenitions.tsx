import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Defenitions: React.FC = () => {
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
            {data[0].meanings.map((el) =>
              el.definitions
                .filter((_, id) => id < 4)
                .map((word, id) => {
                  return (
                    <li key={id}>
                      <strong>{id + 1}</strong>. &nbsp;
                      {word.definition}
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

export default Defenitions