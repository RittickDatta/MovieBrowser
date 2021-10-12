import React from 'react';
import { getReadableDate } from '../../../helpers/getReadableDate';
import { getTimeInHoursMins } from '../../../helpers/getTimeInHoursMins';
import styles from './MoviePoster.module.css';
function MoviePoster(props: any) {
  const { movie } = props;
  const {
    backdrop_path,
    title,
    genres,
    status,
    release_date,
    runtime,
    adult,
    homepage,
    tagline,
    vote_average,
    vote_count,
  } = movie;
  const processedGenres =
    genres && genres.map((genre: { id: number; name: string }) => genre.name);

  return (
    <div>
      <div>
        <div className={styles.wrapper}>
        <img
          className={styles.backdrop}
          src={`http://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt=''
        />
        </div>
      </div>
      <div className={styles.infoBar}>
        <div className={styles.titleAndTag}>
          <h1>{title}</h1>
          <h3>{tagline}</h3>
          <h4>{`${status} | ${getReadableDate(
            release_date
          )} | ${processedGenres} | ${getTimeInHoursMins(runtime)}`}</h4>
        </div>
        <div className={styles.rating}>{`${vote_average} (${vote_count})`}</div>
      </div>
    </div>
  );
}

export default MoviePoster;
