import {NavLink, Outlet} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import css from './Navigation.module.css'


export default function Navigation () {
    return (
        <header className={css.container}>
            <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/movies">
                Movies
            </NavLink>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
            </nav>
        </header>
    )
}