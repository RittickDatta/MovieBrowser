import React from 'react'
import styles from './PageNotFound.module.css'
function PageNotFound(props:any) {
    return (
        <div className={styles.PageNotFoundWrapper}>
            {props.msg}
        </div>
    )
}

export default PageNotFound
