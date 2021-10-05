import React from 'react'
import styles from './MoviesHomeContainer.module.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import BrowseContainer from '../BrowseContainer/BrowseContainer'
import { useEffect, useState } from 'react';
import { getGenres, getMovies } from '../../services/movieService';
import { processMovieAPIResults } from '../../helpers/processMovieAPIResults';
import { Movie } from '../../types/Movie';
import { getGenreID } from '../../helpers/getGenreID';

function MoviesHomeContainer() {
    const [genre, setGenre] = useState([])
    const [movies, setMovies] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [totalResults, setTotalResults] = useState(null);
    useEffect(() => {
        const genres = (async () => await getGenres())();
        const movies = async () => await getMovies();
        const results = movies().then(res => {
            console.log('results:::::::',res)
            const {
                page, 
                results,
                total_pages,
                total_results
            } = res;
            setCurrPage(page);
            const processedMovieResults:any = processMovieAPIResults(results);
            console.log('::::::::::processedMovieResults', processedMovieResults);
            setMovies(processedMovieResults);
            setTotalPages(total_pages);
            setTotalResults(total_results);
        });
        const genreResults = genres.then(res => {
            console.log(':::::::genre::::::::', res)
            const { genres } = res;
            setGenre(genres);
        })
        console.log(':::::movies:::::::',results);
        
    }, [])

    const categorySelectedHandler = (category: string) => {
        console.log('Selected category:::', category);
        console.log(genre, typeof genre);
        const genreID = getGenreID(genre, category)
        if(genreID !== -1) {
            console.log('Selected category GenreID:::', genreID);
        }
    }

    return (
        <>
            <SearchContainer />
            <BrowseContainer
                categorySelected={categorySelectedHandler}
                movies={movies}
                genres={genre}
            />
        </>
    )
}

export default MoviesHomeContainer
