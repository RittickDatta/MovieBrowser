import React from 'react';
import styles from './SearchContainer.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
function SearchContainer(props: any) {
  const { updateWithSearchResults, currPage, activeGenreID, updateIfSearchText } = props;

  const searchResultsHandler = (res: any) => {
    updateWithSearchResults(res);
  };

  return (
    <div className={styles.searchBarWrapper}>
      <div className={styles.text}>
        Find perfect movie for <span className={styles.emphasis}>evening</span>
      </div>
      <SearchBar
        onSearchResults={searchResultsHandler}
        currPage={currPage}
        activeGenreID={activeGenreID}
        updateIfSearchText={updateIfSearchText}
      />
    </div>
  );
}

export default SearchContainer;
