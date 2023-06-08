import { configureStore } from '@reduxjs/toolkit'
import { moviesAPI } from '../service/Movies';

export const store = configureStore({
    reducer: {
        [moviesAPI.reducerPath]: moviesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesAPI.middleware),
});