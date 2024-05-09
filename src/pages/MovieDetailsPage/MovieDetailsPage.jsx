import { useParams, Link, Outlet } from "react-router-dom"

export default function MovieDetailsPage ({getMovieById}) {
    const {movieId} = useParams();
    const movie = getMovieById(Number(movieId));
    return (
        <main>
            <Link to='/'>Go back</Link>
            <img src="" alt="" />
            <div>
                <h1>{movie.title}</h1>
                <p>User score: {movie.vote_average.toFixed(2)}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{movie.genres_ids}</p>
            </div>
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    )
}