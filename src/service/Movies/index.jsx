// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, REACT_BASE_URL } from '../../constants'

// Define a service using a base URL and expected endpoints
export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: REACT_BASE_URL }),
  endpoints: (builder) => ({
    getMoviePopular: builder.query({
      query: () => `/movie/popular?api_key=${API_KEY}`,
    }),
    getMovieUpcoming: builder.query({
      query: () => `/movie/upcoming?api_key=${API_KEY}&page=5`,
    }),
    getMovieNowPlaying: builder.query({
      query: () => `/movie/now_playing?api_key=${API_KEY}&page=3`,
    }),
    getMovieById: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviePopularQuery,
  useGetMovieUpcomingQuery,
  useGetMovieNowPlayingQuery,
  useGetMovieByIdQuery
} = moviesAPI;