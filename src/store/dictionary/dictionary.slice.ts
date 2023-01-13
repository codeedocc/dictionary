import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  example: number
}

const initialState: IInitialState = {
  example: 0,
}

export const dictionarySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setExample: (state, action) => {
      state.example = action.payload
    },
  },
})

export const currencyActions = dictionarySlice.actions
export const currencyReducer = dictionarySlice.reducer
