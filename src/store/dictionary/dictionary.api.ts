import { ServerResponse } from './../../model/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dictionaryApi = createApi({
  reducerPath: 'dictionary/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  }),
  endpoints: (build) => ({
    searchWord: build.query<ServerResponse, string>({
      query: (search: string) => ({
        url: `${search}`,
      }),
    }),
  }),
})

export const { useLazySearchWordQuery, useSearchWordQuery } = dictionaryApi
