import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { API } from '../api-service';

function MovieList(props){
    const movieClicked = movie => evt =>{
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie)
    }
    
    const removeClicked = movie => {
        API.deleteMovie(movie.id)
            .then(() => props.removeClicked(movie))
            .catch(error => console.log())
    }

    return (
        <div>
            { props.movies && props.movies.map( movie => {
            return (
                <div key={movie.id} className="movie-item">
                    <h2 className="movie-title" onClick={movieClicked(movie)}>{movie.title}</h2> 
                    <div className="pointer"><FontAwesomeIcon icon={ faEdit } onClick={() => editClicked(movie)}/></div>
                    <div className="pointer"><FontAwesomeIcon icon={ faTrash } onClick={() => removeClicked(movie)}/></div>

                </div>
            )
            })}
        </div>
    )
}
export default MovieList;
