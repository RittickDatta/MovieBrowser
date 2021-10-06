import React, { useEffect, useState } from 'react';
import Button from '../../common/UI/Button/Button';
import { search } from '../../services/movieService';
import styles from './SearchBar.module.css';
function SearchBar(props: any) {
  const { onSearchResults, currPage, activeGenreID, updateIfSearchText } = props;
  const [searchtext, setsearchtext] = useState('');

  useEffect(() => {
    const searchResults = (async () => await search(searchtext, currPage, activeGenreID))();
    searchResults.then((res) => {
      console.log('::::::search results:::::::', res);
      if (res) {
        onSearchResults(res);
      }
    });
  }, [searchtext]);

  const searchTextHandler = (searchText: string) => {
    if (searchText.trim().length === 0) return;
    if(searchText.trim().length > 0) {
        setsearchtext(searchText);
        updateIfSearchText(true);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.customInput}
        type='text'
        onChange={(event) => searchTextHandler(event.target.value)}
      />
      <Button btnStyle={styles.searchBtn} btnText='SEARCH'>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
