import React from 'react';
import styles from './BrowseContainer.module.css';
import MovieGridTitle from '../../components/MovieGridTitle/MovieGridTitle';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getGenreList } from '../../helpers/getGenreList';
import Pagination from '../../common/Pagination/Pagination';
function BrowseContainer(props: any) {
  const { genres, activeGenreID, currPage, totalPages, pageSize, updateCurrentPage } = props;
  const genreData = getGenreList(genres);
  const keys = genreData.genreIDs;
  const values = genreData.genreNames;
  const categories = {
    keys,
    values,
  };
  const { movies, categorySelected } = props; // Set movies here
  return (
    <>
      <MovieGridTitle title='Browse movies by category' />
      <CategoryBar
        categories={categories}
        activeGenreID={activeGenreID}
        categorySelected={categorySelected}
      />
      <Pagination 
        currPage={currPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={updateCurrentPage}
      />
      <MoviesList movies={movies} />
      <Pagination 
        currPage={currPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={updateCurrentPage}
      />
    </>
  );
}

export default BrowseContainer;
