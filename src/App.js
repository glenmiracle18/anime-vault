import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 8b79088f


const API_URL = `http://www.omdbapi.com/?apikey=8b79088f`
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies((data.Search))
    console.log(movies);
  }

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies...'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img className='search-icon' 
          src={SearchIcon} 
          alt='Search Icon'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID}/>
            ))
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
    </div> 
  );
}

export default App