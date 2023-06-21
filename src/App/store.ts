import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../features/Movies/movies-reducer.ts";

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
})

export type AppRootStateType = ReturnType<typeof store.getState>



//@ts-ignore
window.store = store;