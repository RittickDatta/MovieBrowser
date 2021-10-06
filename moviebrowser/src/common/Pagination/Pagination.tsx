import React from 'react'
import styles from './Pagination.module.css'
function Pagination(props:any) {
    const {
        currPage,
        totalPages,
        pageSize,
        onPageChange
    } = props;

    const firstPage = (currPage: number) => {
        if( currPage !== 1){
            onPageChange(1)
        }
    }

    const prevPage = (currPage: number) => {
        if(currPage === 1) return;
        onPageChange(currPage - 1)
    }

    const nextPage = (currPage: number) => {
        if(currPage === totalPages) return;
        onPageChange(currPage + 1)
    }

    const lastPage = (currPage: number) => {
        if(currPage === totalPages) return;
        onPageChange(totalPages)
    }

    return (
        <div className={styles.paginationWrapper}>
            <div className={styles.paginationBtnContainer}>
                <button className={styles.paginationBtn} onClick={() => firstPage(currPage)}>First</button>
                <button className={styles.paginationBtn} onClick={() => prevPage(currPage)}>Prev</button>
                <button className={styles.paginationBtn} onClick={() => nextPage(currPage)}>Next</button>
                <button className={styles.paginationBtn} onClick={() => lastPage(currPage)}>Last</button>
            </div>
        </div>
    )
}

export default Pagination
