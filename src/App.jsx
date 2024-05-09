import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import MovieCast from './components/MovieCast/MovieCast.jsx'
import MovieReviews from './components/MovieReviews/MovieReviews.jsx'

import {fetchTrendMovies} from './tmdbApi.js'


function App() {
  const [trendMovies, setTrendMovies] = useState([]);

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
  
  

  const getMovieById = (movieId) => {
    return trendMovies.find((movie => movie.id === movieId));
  }

  

  return (
      <>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage items={trendMovies}/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage getMovieById={getMovieById}/>}> 
            <Route path="cast" element={<MovieCast/>}/>
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
  )
}

export default App
