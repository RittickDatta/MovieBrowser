import React from 'react'
import styles from './Navigation.module.css'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'
function Navigation() {
    return (
        <div className={styles.navBar}>
            <Logo />
            <NavItems />
        </div>
    )
}

export default Navigation
