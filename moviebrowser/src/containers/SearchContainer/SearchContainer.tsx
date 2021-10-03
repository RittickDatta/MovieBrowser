import React from 'react'
import styles from './SearchContainer.module.css'
import SearchBar from '../../components/SearchBar/SearchBar'
function SearchContainer() {
    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.text}>
                Find perfect movie for <span className={styles.emphasis}>evening</span>
            </div>
            <SearchBar />
        </div>
    )
}

export default SearchContainer
