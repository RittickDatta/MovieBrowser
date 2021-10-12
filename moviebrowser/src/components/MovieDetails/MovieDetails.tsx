import React, { useEffect, useState } from 'react'
import styles from './MovieDetails.module.css'
import MoviePoster from './MoviePoster/MoviePoster'
import MovieOverview from './MovieOverview/MovieOverview'
import MovieFacts from './MovieFacts/MovieFacts'
import Credits from './Credits/Credits'
import CastList from './CastList/CastList'
import Media from './Media/Media'
import Keywords from './Keywords/Keywords'
import Recommendations from './Recommendations/Recommendations'
import Navigation from '../../common/Layout/Navigation/Navigation'
import ContentArea from '../../common/ContentArea/ContentArea'
import { useLocation, useParams } from 'react-router'
import { getMovie } from '../../services/movieService'

function MovieDetails(props:any) {
    const router:{id:string} = useParams();
    const { id } =router;
    const [movie, setMovie] = useState({})
    

    useEffect(() => {
        const movieData = getMovie(id);
        movieData.then(data => {
            console.log('movieData', data)
            setMovie(data);
        })
    }, [])


    return (
        <>
        <Navigation/>
        <ContentArea>
        {/* <div> */}
            <div>
                <MoviePoster movie={movie}/>
            </div>
            <div>
                <div>
                    <MovieOverview movie={movie}/>
                    <Credits />
                </div>
                <div>
                    <MovieFacts />
                </div>
            </div>
            <div>
                <CastList />
            </div>
            <div>
                <div>
                    <Media />
                </div>
                <div>
                    <Keywords />
                </div>
            </div>
            <div>
                <Recommendations />
            </div>
        {/* </div> */}
        </ContentArea>
        </>
    )
}

export default MovieDetails
