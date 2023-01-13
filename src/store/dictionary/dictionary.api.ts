import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dictionaryApi = createApi({
  reducerPath: 'dictionary/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en',
  }),
  endpoints: (build) => ({
    searchCurrency: build.query({
      query: () => ({
        url: 'latest.json',
        params: {
          app_id: process.env.REACT_APP_SECRET_KEY,
        },
      }),
    }),
  }),
})

export const { useSearchCurrencyQuery } = dictionaryApi
