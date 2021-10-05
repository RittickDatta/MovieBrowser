import React from 'react';
import styles from './BrowseContainer.module.css';
import MovieGridTitle from '../../components/MovieGridTitle/MovieGridTitle';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getGenreList } from '../../helpers/getGenreList';
function BrowseContainer(props: any) {
  const { genres } = props;
  const genreData = getGenreList(genres);
  const keys = genreData.genreIDs;
  const values = genreData.genreNames
  const categories = {
    keys,
    values,
  };
  const { movies, categorySelected } = props; // Set movies here
  return (
    <>
      <MovieGridTitle title='Browse movies by category' />
      <CategoryBar categories={categories} categorySelected={categorySelected} />
      <MoviesList movies={movies} />
    </>
  );
}

export default BrowseContainer;
