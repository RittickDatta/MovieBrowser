import React from 'react'
import styles from './MoviesHomeContainer.module.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import BrowseContainer from '../BrowseContainer/BrowseContainer'
function MoviesHomeContainer() {
    return (
        <>
            <SearchContainer />
            <BrowseContainer />
        </>
    )
}

export default MoviesHomeContainer
