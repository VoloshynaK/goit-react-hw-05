import { useParams, useLocation, Link, Outlet} from "react-router-dom"
import {fetchMovieDetails} from '../../Api/apiServices'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const notify = () => toast.error('Something went wrong. Please, try again!', {
    style: {
      border: '1px solid #000000',
      padding: '16px',
      color: '#000000',
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#f5f5f5',
    },
  });


export default function MovieDetailsPage () {
    const [movieDetails, setMovieDetails] = useState({});
    const location = useLocation();
    const { movieId } = useParams();

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovieDetails(data)
            } catch (error) {
                notify();
                console.log(error);
            }
        }
        getMovieDetails();
    }, [movieId]);

    const {original_title, overview, genres, poster_path, vote_average } = movieDetails;
    const scoreToFixed = Number(vote_average).toFixed(2);

    return (
        <main>
            <Link to={location.state?.from ?? '/'}>Go back</Link>
            <img src={poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`} 
              loading='lazy' alt='Movie poster' />
            <div>
                <h1>{original_title}</h1>
                <p>User score: {scoreToFixed}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <ul>{genres &&
                    genres.length &&
                    genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                </ul>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast" state={{ ...location.state }}>Cast</Link>
                    </li>
                    <li>
                        {' '}
                        <Link to="reviews" state={{ ...location.state }}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </main>
    )
}