import React from 'react'
import Button from '../../common/UI/Button/Button'
import styles from './SearchBar.module.css'
function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input className={styles.customInput} type="text"/>
            <Button
                btnStyle={styles.searchBtn}
                btnText='SEARCH'
            >Search</Button>
        </div>
    )
}

export default SearchBar
