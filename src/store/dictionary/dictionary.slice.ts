import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  word: string
}

const initialState: IInitialState = {
  word: '',
}

export const dictionarySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload
    },
  },
})

export const dictionaryActions = dictionarySlice.actions
export const dictionaryReducer = dictionarySlice.reducer
