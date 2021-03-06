import React from 'react';
import { Movie } from '../../types/Movie';
import styles from './MoviesList.module.css';
import MoviesListItem from './MoviesListItem/MoviesListItem';
function MoviesList(props: any) {
  const { movies } = props;
  console.log('::::MoviesList::::;', movies);
  const movieListItems = movies && movies.map((movie: Movie) => <MoviesListItem key={movie.id} movie={movie}/>);
  return <div className={styles.movieListItems}>{movieListItems}</div>;
}

export default MoviesList;
