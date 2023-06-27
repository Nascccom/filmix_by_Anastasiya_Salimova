import style from './Movies.module.css'
import {RankingCircle} from "../../components/RankingCircle/RankingCircle.tsx";
import {BAZE_IMG_URL} from "../../api/movie-api.ts";

type PropsType = {
    poster_path: string
    title: string
    overview: string
}

export const MovieCard = ({poster_path, title, overview }: PropsType) => {
    return (
      <div className={style.movieCard}>
          <img
            src={`${BAZE_IMG_URL}${poster_path}`}
            alt={title}/>
          <div className={style.movieInfo}>
              <h3>{title}</h3>
              <RankingCircle/>
          </div>
          <div className={style.overview}>
              <h3>{title}</h3>
              <span>{overview}</span>
          </div>
      </div>
    );
};

