import React,{useRef} from 'react';
import MovieList from './MovieList';
import { Button, Alert } from 'react-bootstrap';


function CreateMovie({setTextInput, setMovies,textInput}) 
{
    // Ref
    const titleRef = useRef(null);
    const dateRef = useRef(null);

    // console.log(dateRef);

    // Event
    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, textInput]);
    }

    const handleChange = (e) => {
        setTextInput({
            title: titleRef.current.value,
            release_date: dateRef.current.value,
            poster_path: "kIHgjAkuzvKBnmdstpBOo4AfZah.jpg"
        });
    }




    return(
        <div className="createMovie">
            <form action="">
                <label htmlFor="search">Title:</label>
                <input type="text" id="title" onChange={handleChange} ref={titleRef}/>
                <label htmlFor="search">Release Date:</label>
                <input type="text" id="releaseDate" onChange={handleChange} ref = {dateRef}/>
                <Button type="submit" id="submit" onClick={handleSubmit}>Submit </Button>
            </form>
        </div>
    )
}




export default CreateMovie;

