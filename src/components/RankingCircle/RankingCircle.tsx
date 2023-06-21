import style from "./RankingCircle.module.css";

export const RankingCircle = () => {
    return (
      <div className={style.rankingCircle}>
          <div className={style.outerRing}>
              <div className={style.userScoreChart}>
                  <div className={style.percent}>
                      <span className={style.icon}>9.8</span>
                  </div>
              </div>
          </div>
      </div>
    );
};