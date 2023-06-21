import style from './Movies.module.css'
import {RankingCircle} from "../../components/RankingCircle/RankingCircle.tsx";

export const MoviesCard = () => {
    return (
      <div className={style.movieCard}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNTMyNzQ4MmUtMmJiYy00YjlmLWJiMzktNjc1MGNlMzBjYjhiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg"
            alt="MovieImg"/>
          <div className={style.movieInfo}>
              <h3>Movie Title</h3>
              <RankingCircle/>
          </div>
          <div className={style.overview}>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda aut cupiditate delectus
                  impedit ipsa laborum minima nesciunt nisi obcaecati quo quod rerum sequi, suscipit ullam unde vel
                  voluptas! Amet.
              </p>
          </div>
      </div>
    );
};

