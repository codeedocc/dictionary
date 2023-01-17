import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  word: string
  info: string
  isReady: boolean
}

const initialState: IInitialState = {
  word: '',
  info: '',
  isReady: false,
}

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    setIsReady: (state, action) => {
      state.isReady = action.payload
    },
  },
})

export const dictionaryActions = dictionarySlice.actions
export const dictionaryReducer = dictionarySlice.reducer
