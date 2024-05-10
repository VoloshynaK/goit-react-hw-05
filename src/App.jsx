import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import MovieCast from './components/MovieCast/MovieCast.jsx'
import MovieReviews from './components/MovieReviews/MovieReviews.jsx'

import fetchTrendMovies from './Api/trendMoviesApi.js'
import fetchMovieDetails from './Api/movieDetailsApi.js'
import fetchMovieCast from './Api/movieCastApi.js'
import fetchMovieReviews from './Api/movieReviewsApi.js'
import fetchMovieGenres from './Api/movieGenresApi.js'


function App() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [imageDetails, setImageDetails] = useState({});
  const [currMovieCast, setCurrMovieCast] = useState([]);
  const [currMovieReviews, setCurrMovieReviews] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const data = await fetchTrendMovies();
        setTrendMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTrendMovies();
  }, [trendMovies]);

  useEffect(() => {
    async function getImageDetails () {
      try {
        const data = await fetchMovieDetails();
        setImageDetails({baseUrl: data.base_url, size: data.poster_sizes[3]});
      } catch (error) {
        console.log(error);
      }
    }
    getImageDetails();
  }, [imageDetails]);

  async function getMovieCast (movieId) {
    try {
      const movieCast = await fetchMovieCast(movieId);
      setCurrMovieCast(movieCast);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMovieReviews (movieId) {
    try {
      const movieReviews = await fetchMovieReviews(movieId);
      setCurrMovieReviews(movieReviews);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getMovieGenres () {
      try {
        const genres = await fetchMovieGenres();
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieGenres();
  }, [genres]);


  return (
      <>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage items={trendMovies}/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage trendMovies={trendMovies} imageDetails={imageDetails} getMovieCast={getMovieCast} getMovieReviews={getMovieReviews} movieGenres={genres}/>}> 
            <Route path="cast" element={<MovieCast casts={currMovieCast}/>}/>
            <Route path="reviews" element={<MovieReviews reviews={currMovieReviews}/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
  )
}

export default App
