import React from 'react'
import styles from './NavItems.module.css'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import PageNotFound from '../../../PageNotFound/PageNotFound'

function NavItems() { 
    return (
        <>
            <Switch>
                <Route path="/">

                </Route>
                <Route path="/movies" exact>
                    
                </Route>
                <Route path="/movies/:id">
                    
                </Route>
                <Route path="/tv-shows">
                    
                </Route>
                <Route path="/kids">
                    
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
                {/* State here, navlinks */}
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <NavLink to="/movies" activeClassName={styles.active}>
                        Movies
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/tv-shows"  activeClassName={styles.active}>
                        TV Shows
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/kids"  activeClassName={styles.active}>
                        Kids
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavItems
