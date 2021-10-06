import React from 'react'
import styles from './MoviesHomeContainer.module.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import BrowseContainer from '../BrowseContainer/BrowseContainer'
import { useEffect, useState } from 'react';
import { getGenres, getMovies, getMoviesByCategory } from '../../services/movieService';
import { processMovieAPIResults } from '../../helpers/processMovieAPIResults';
import { Movie } from '../../types/Movie';
import { getGenreID } from '../../helpers/getGenreID';
import { PAGE_SIZE } from '../../common/Constants/Constants';

function MoviesHomeContainer() {
    const [genre, setGenre] = useState([])
    const [activeGenreID, setActiveGenreID] = useState(28)
    const [movies, setMovies] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [totalResults, setTotalResults] = useState(null);
    const [anySearchText, setAnySearchText] = useState(false)
    useEffect(() => {
        const genres = (async () => await getGenres())();
        const movies = async () => await getMovies();
        const results = movies().then(res => {
            updateMoviesAndPageData(res);
        });
        genres.then(res => {
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
            const moviesByCategory = (async () => await getMoviesByCategory(genreID))();
            moviesByCategory.then(res => {
                updateMoviesAndPageData(res);
            })
            setActiveGenreID(genreID)
         
        }
    }

    const updateCurrentPage = (pageNumber: number) => {
        console.log('New Page Number>>>>>>>>>>>', pageNumber)
        if(pageNumber !== currPage) {
            setCurrPage(pageNumber)
            const moviesByPageNumber = (async () => await getMoviesByCategory( activeGenreID.toString(), pageNumber))();
            moviesByPageNumber.then(res => {
                updateMoviesAndPageData(res)
            })
        }
    }

    const anySearchTextHandler = (searchTextPresent: boolean) => {
        setAnySearchText(searchTextPresent)
    }

    return (
        <>
            <SearchContainer 
                updateWithSearchResults={updateMoviesAndPageData}
                currPage={currPage}
                activeGenreID={activeGenreID}
                updateIfSearchText={setAnySearchText}
            />
            <BrowseContainer
                categorySelected={categorySelectedHandler}
                movies={movies}
                genres={genre}
                activeGenreID={activeGenreID}
                currPage={currPage}
                totalPages={totalPages}
                pageSize={PAGE_SIZE}
                updateCurrentPage={updateCurrentPage}
                anySearchText={anySearchText}
            />
        </>
    )

    function updateMoviesAndPageData(res: any) {
        console.log('::::::::moviesByCategory:::::::::', res);
        const {
            page, results, total_pages, total_results
        } = res;
        const processedMoviesByCategory: any = processMovieAPIResults(results);
        setCurrPage(page);
        setMovies(processedMoviesByCategory);
        setTotalPages(total_pages);
        setTotalResults(total_results);
    }
}

export default MoviesHomeContainer
