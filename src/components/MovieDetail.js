import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteMovie from './DeleteMovie';
import "./MovieDetail.css"

function MovieDetail() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();  

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(res => res.json())
            .then(setMovie);
    }, [id]); 
    
    return (
        <div className='movie-detail'>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}/10</p>
            <div><Link to={`/movies/${id}/edit`}>Edit</Link></div>
            <div><DeleteMovie id={id} className="delete-movie-button" /></div>
        </div>
    );
    
}

export default MovieDetail;
