import {NavLink} from 'react-router-dom'
import css from './Navigation.module.css'

export default function Navigation () {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
            <NavLink to="/" className={css.navLink}>
                Home
            </NavLink>
            <NavLink to="/movies" className={css.navLink}>
                Movies
            </NavLink>
            </nav>
        </header>
    )
}