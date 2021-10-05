import React from 'react'
import styles from './MovieGridTitle.module.css'
function MovieGridTitle(props:any) {
    const { title } = props;
    return (
        <div className={styles.titleText}>
            {title}
        </div>
    )
}

export default MovieGridTitle
