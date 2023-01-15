import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { useSearchWordQuery } from '../../store/dictionary/dictionary.api'

const Meanings: React.FC = () => {
  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
    refetchOnFocus: true,
  })

  return (
    <>
      {data?.length && (
        <div className="meanings-container">
          <p className="title">Meanings & Defenitions:</p>
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
