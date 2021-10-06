import React from 'react';
import styles from './BrowseContainer.module.css';
import MovieGridTitle from '../../components/MovieGridTitle/MovieGridTitle';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getGenreList } from '../../helpers/getGenreList';
import Pagination from '../../common/Pagination/Pagination';
import PageNotFound from '../../common/PageNotFound/PageNotFound';
function BrowseContainer(props: any) {
  const {
    genres,
    activeGenreID,
    currPage,
    totalPages,
    pageSize,
    updateCurrentPage,
    anySearchText,
  } = props;
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
      {!anySearchText && (
        <>
          <MovieGridTitle title='Browse movies by category' />
          <CategoryBar
            categories={categories}
            activeGenreID={activeGenreID}
            categorySelected={categorySelected}
          />
        </>
      )}
      {
        anySearchText &&
         <>
         <MovieGridTitle title='Your search results...' />
       </>
      }
      {!anySearchText && movies && <Pagination
        currPage={currPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={updateCurrentPage}
      />}
      {movies && movies.length === 0 && <PageNotFound msg="No movies found..." />}
      {movies && <MoviesList movies={movies} />}
      {!movies && <PageNotFound msg='No Data Found, come back later.' /> }
      {!anySearchText && movies && <Pagination
        currPage={currPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={updateCurrentPage}
      />}
    </>
  );
}

export default BrowseContainer;
