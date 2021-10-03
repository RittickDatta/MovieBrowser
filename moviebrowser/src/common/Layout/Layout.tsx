import React from 'react'
import styles from './Layout.module.css'
import Navigation from './Navigation/Navigation'
import ContentArea from '../ContentArea/ContentArea'
import MoviesHomeContainer from '../../containers/MoviesHomeContainer/MoviesHomeContainer'
function Layout() {
    return (
        <>
            <Navigation/>
            <ContentArea>
                <MoviesHomeContainer />
            </ContentArea>
        </>
    )
}

export default Layout
