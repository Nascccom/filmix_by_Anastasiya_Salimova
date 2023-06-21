import './App.css'
import {useEffect} from "react";
import {movieAPI} from "../api/movie-api.ts";
import {Header} from "../features/Header/Header.tsx";
import {MoviesCard} from "../features/Movies/MoviesList.tsx";
import style from '../features/Movies/Movies.module.css'


function App() {

    useEffect(() => {
        movieAPI.getMovies()
    }, [])

    return (
      <div className='container'>
          <Header/>
          <div className={style.movieList} >
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
              <MoviesCard/>
          </div>
      </div>
    )
}

export default App
