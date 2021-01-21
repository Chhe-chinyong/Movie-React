import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import image from './images/movie.png';



import './styles/app.css';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
      const fetchItem = async() => {
        const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`)
        setMovies(result.data.results);
        // console.log(result.data.results)
      }
      fetchItem();
     
  },[]);


 

  return (
    <div className="App">
      
      
      <h1 style={{textAlign:"center", padding:"1rem", display:"inline"}}>Popular movies</h1>
      <img src={image} id="image" alt=""/>
      <MovieList movies = {movies} />
    </div>
  );
}

export default App;
