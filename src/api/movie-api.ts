import axios from "axios";

const API_KEY = '6a984a0078229ccc2a19cdb6fd0f5230'
const BAZE_URL = 'https://api.themoviedb.org/3'
export const BAZE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const movieAPI = {
    getMovies() {
        return axios.get<GetMoviesResponseType>(`${BAZE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)

    }
}

export type GetMoviesResponseType = {
    page: number
    results: MoviesDataType[]
    total_pages: number
    total_results: number
}

export type MoviesDataType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: OriginalLanguageType
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: false
    vote_average: number
    vote_count: number
}

export type OriginalLanguageType = "en" | "ru"

