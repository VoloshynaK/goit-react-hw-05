import { useParams, Link, Outlet } from "react-router-dom"

export default function MovieDetailsPage ({trendMovies, imageDetails, getMovieCast, getMovieReviews, movieGenres}) {

    const getMovieById = (movieId) => {
        return trendMovies.find((movie => movie.id === movieId));
    }
    
    const {movieId} = useParams();
    const movie = getMovieById(Number(movieId));

    getMovieCast(Number(movieId));
    getMovieReviews(Number(movieId));

    const imageUrl = `${imageDetails.baseUrl}${imageDetails.size}/${movie.poster_path
    }`;

    

    const getGenresName = () => {
        const currMovieGenre = [];
        const genres = movie.genre_ids;
        genres.map(genreId => {
            const genresName = movieGenres.find(genre => genre.id === genreId);
            currMovieGenre.push(genresName.name);
        })
        return currMovieGenre;
        
    };
    const genreNames = getGenresName();

    return (
        <main>
            <Link to='/'>Go back</Link>
            <img src={imageUrl} alt='Movie poster' />
            <div>
                <h1>{movie.title}</h1>
                <p>User score: {movie.vote_average.toFixed(2)}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{genreNames.join(", ")}</p>
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