import axios from 'axios';
import React, { useState, useEffect } from 'react';
// Bootstrap
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import MovieList from './components/MovieList';
import image from './images/movie.png';
import CreateMovie from './components/CreateMovie';
import './styles/app.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [textInput,setTextInput] = useState({
      title: "",
      release_date: "",
      
  });

  useEffect(()=> {
      const fetchItem = async() => {
        const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`)
        setMovies(result.data.results);
        console.log(result.data.results)
      }
      fetchItem();
     
  },[]);

  return (
    <div className="App">
      <div className="container-fluid">
        <h1 style={{textAlign:"center", padding:"1rem", display:"inline"}}>Popular movies</h1>
        <img src={image} id="image" alt="image" style={{width:"80px", height:"auto"}}/>
        <CreateMovie setTextInput={setTextInput} textInput={textInput} setMovies={setMovies} movies={movies} />
        <MovieList movies = {movies} />
        </div>
    </div>
  );
}

export default App;
