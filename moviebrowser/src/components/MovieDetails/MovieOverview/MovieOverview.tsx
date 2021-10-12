import React from 'react'
import styles from './MovieOverview.module.css'
function MovieOverview(props:any) {
    const { movie } = props;
    const {
        original_title,
        overview
    } = movie;

    return (
        <div className={styles.overviewWrapper}>
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    )
}

export default MovieOverview
