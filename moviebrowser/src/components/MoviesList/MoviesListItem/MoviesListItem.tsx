import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviesListItem.module.css';
function MoviesListItem(props: any) {
  const { movie } = props;
  const { id, title, release_date, poster_path } = movie;
  return (
    <Link to={`/movies/${id}`} style={{textDecoration:'none', color:'black'}}>
      <div className={styles.movieItemWrapper}>
        <div className={styles.movieItemContainer}>
          <img src={poster_path} className={styles.movieItemPoster} />
          <div className={styles.movieItemTitle}>{title}</div>
          <div className={styles.movieItemReleaseDate}>{release_date}</div>
        </div>
      </div>
    </Link>
  );
}

export default MoviesListItem;
