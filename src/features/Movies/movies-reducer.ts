import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetMoviesResponseType, MoviesDataType} from "../../api/movie-api.ts";

type MoviesStateType = {
    page: number
    total_pages: number | null
    total_results: number | null
    movies: MoviesDataType[] | null
    isLoading: boolean
}

//type MoviesType = { [key: number]: { movie: MoviesDataType[] } } | null

const initialState: MoviesStateType = {
    page: 1,
    total_pages: null,
    total_results: null,
    movies: null,
    isLoading: false
}


const moviesReducer = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<GetMoviesResponseType>) => {
            // const enumerationMovies: MoviesType = {}
            // action.payload.results.forEach(movie => {
            //     enumerationMovies[movie.id] = { movie: [movie] }
            // })
            state.page = action.payload.page
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
            state.movies = action.payload.results
        },
    }
})


export const {setMovies} = moviesReducer.actions

export default moviesReducer.reducer