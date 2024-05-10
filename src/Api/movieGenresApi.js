import axios from "axios";

export default async function fetchMovieGenres () {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY3ODc5OWNjOTQ5OGZmYmE3ZmNlZmI3YWNlMjgzNiIsInN1YiI6IjY2MzU0MzI3ZDE4NTcyMDEyMjM0ZGM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgw1ifnq1ew6ABFBCPzpyvGXsjKBh72LLIc4kej4owE'
        }
    };
      
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    return response.data.genres; 
}

