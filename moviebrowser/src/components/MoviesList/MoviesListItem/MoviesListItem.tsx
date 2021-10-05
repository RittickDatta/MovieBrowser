import React from 'react';
import styles from './MoviesListItem.module.css';
function MoviesListItem(props: any) {
  const { movie } = props;
  const { title, release_date, poster_path } = movie;
  return (
    <div className={styles.movieItemWrapper}>
      <div className={styles.movieItemContainer}>
        <img src={poster_path} className={styles.movieItemPoster} />
        <div className={styles.movieItemTitle}>{title}</div>
        <div className={styles.movieItemReleaseDate}>{release_date}</div>
      </div>
    </div>
  );
}

export default MoviesListItem;
