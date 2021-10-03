import React from 'react'
import styles from './ContentArea.module.css'
import MoviesHomeContainer from '../../containers/MoviesHomeContainer/MoviesHomeContainer'
function ContentArea(props:any) {
    return (
        <div className={styles.container}>
            {/* <MoviesHomeContainer /> */}
            {props.children}
        </div>
    )
}

export default ContentArea
