import React, { useRef } from 'react'
import { useAppSelector } from '../hooks/redux'
import { useSearchWordQuery } from '../store/dictionary/dictionary.api'

const Audio = () => {
  const soundImg = require('../assets/listening.png')
  const playSound = useRef<HTMLAudioElement>(null)

  const { info, isReady } = useAppSelector((state) => state.dictionary)

  const { data } = useSearchWordQuery(info, {
    skip: !isReady,
  })

  const listenWord = () => {
    playSound.current!.play()
  }

  return (
    <>
      {data?.length && (
        <>
          <audio
            src={data[0].phonetics.find((el) => el.audio !== '')?.audio}
            id="sound"
            ref={playSound}
          ></audio>
          {data[0].phonetics.find((el) => el.audio !== '') ? (
            <label htmlFor="sound">
              <img
                src={soundImg}
                className="image"
                onClick={() => listenWord()}
              />
            </label>
          ) : (
            <p>Cant find audio for this word...</p>
          )}
        </>
      )}
    </>
  )
}

export default Audio
