import { dictionaryApi } from './dictionary/dictionary.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dictionarySlice } from './dictionary/dictionary.slice'

const rootReducer = combineReducers({
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  dictionary: dictionarySlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
