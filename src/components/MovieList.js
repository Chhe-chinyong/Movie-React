import React from 'react';
import Movie from './Movie';
import { v4 as uuidv4 } from 'uuid';
function MovieList({movies})
{
    return(
        <div className="movieList">
        {movies.map((movie) => {
            return <Movie poster_path = {movie.poster_path}
            release_date= {movie.release_date}
            title = {movie.title}
            key = {uuidv4()}
            />
        })}
        </div>
    ) 
      
}
export default MovieList;