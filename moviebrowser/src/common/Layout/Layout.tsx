import React from 'react'
import styles from './Layout.module.css'
import Navigation from './Navigation/Navigation'
import ContentArea from '../ContentArea/ContentArea'
function Layout() {
    return (
        <>
            <Navigation/>
            <ContentArea/>
        </>
    )
}

export default Layout
