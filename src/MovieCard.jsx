import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year !== 'N/A' ? movie.Year : ''}</p>
            </div>

            <div>
                <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/404' }
                alt='movie-poster'
                ></img>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard