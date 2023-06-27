import './App.css'
import {useEffect} from "react";
import {movieAPI, MoviesDataType} from "../api/movie-api.ts";
import {Header} from "../features/Header/Header.tsx";
import style from '../features/Movies/Movies.module.css'
import {useDispatch} from "react-redux";
import {setMovies} from "../features/Movies/movies-reducer.ts";
import {useAppSelector} from "../hooks/useSelector/UseSelector.tsx";
import {MovieCard} from "../features/Movies/MoviesCard.tsx";


function App() {
    const moviesList: MoviesDataType[] | null = useAppSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        movieAPI.getMovies()
          .then(res => dispatch(setMovies(res.data)))
    }, [dispatch])

    return (
      <div className='container'>
          <Header/>
          <div className={style.movieList}>
              {moviesList?.map(movie => (
                <MovieCard key={movie.id}
                           poster_path={movie.poster_path}
                           title={movie.title}
                           overview={movie.overview}/>
              ))}
          </div>
      </div>
    )
}

export default App
