import React from 'react'
import styles from './BrowseContainer.module.css'
import MovieGridTitle from '../../components/MovieGridTitle/MovieGridTitle'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import MoviesList from '../../components/MoviesList/MoviesList'
function BrowseContainer() {
    return (
        <>
            <MovieGridTitle />
            <CategoryBar />
            <MoviesList />
        </>
    )
}

export default BrowseContainer
