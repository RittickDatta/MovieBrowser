import React from 'react'
import styles from './MovieDetails.module.css'
import MoviePoster from './MoviePoster/MoviePoster'
import MovieOverview from './MovieOverview/MovieOverview'
import MovieFacts from './MovieFacts/MovieFacts'
import Credits from './Credits/Credits'
import CastList from './CastList/CastList'
import Media from './Media/Media'
import Keywords from './Keywords/Keywords'
import Recommendations from './Recommendations/Recommendations'

function MovieDetails() {
    return (
        <div>
            <div>
                <MoviePoster />
            </div>
            <div>
                <div>
                    <MovieOverview />
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
        </div>
    )
}

export default MovieDetails
