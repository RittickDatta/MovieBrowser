import React from 'react'
import styles from './NavItems.module.css'
import NavItem from './NavItem/NavItem'
import { Switch, Route } from 'react-router-dom'

function NavItems() { 
    return (
        <div>
            <Switch>
                <Route path="/">

                </Route>
                <Route path="/movies">

                </Route>
                <Route path="/tv-shows">

                </Route>
                <Route path="/kids">

                </Route>
            </Switch>
        </div>
    )
}

export default NavItems
