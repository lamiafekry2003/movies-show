import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./trend.scss";
const API_KEY = 'YOUR_TMDB_API_KEY';

export default function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeWindow, setTimeWindow] = useState('day'); // Default to today's trends

  // Fetch trending movies based on timeWindow
  const fetchTrendingMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${timeWindow}/movie`,
        {
          params: {
            api_key: API_KEY,
          },
          headers:{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
        }
        }
      );

      setTrendingMovies(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, [timeWindow]); // Re-fetch data when timeWindow changes

  const handleTimeWindowChange = (event) => {
    setTimeWindow(event.target.value);
  };

  return (
    <div className="trending-movies">
      <h1>Trending Movies ({timeWindow})</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {!isLoading && !error && (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              {/* Display movie details like title, poster image, etc. */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </li>
          ))}
        </ul>
      )}

      <div className="time-window-toggle">
        <label htmlFor="timeWindow">View trends for:</label>
        <select id="timeWindow" value={timeWindow} onChange={handleTimeWindowChange}>
          <option value="day">Today</option>
          <option value="week">This Week</option>
        </select>
      </div>
    </div>
  );
}

