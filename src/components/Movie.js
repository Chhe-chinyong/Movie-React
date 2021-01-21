import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function Movie({poster_path,release_date,title}) {
    return(
        <div className="movie">
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="poster"/>
            <div className="information">
                <h3 className="title">{title}</h3>
                <h5 className="date">{release_date}</h5>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faAddressCard } />            
              </div>    
        </div>
    )
}

export default Movie;