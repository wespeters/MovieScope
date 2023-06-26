// ./src/components/MovieDetail.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteMovie from './DeleteMovie';

function MovieDetail() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();  // Extract the id parameter from the current route

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(res => res.json())
            .then(setMovie);
    }, [id]);  // Listen for changes in the id

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movies/${id}/edit`}>Edit</Link>
            <DeleteMovie id={id} /> 
        </div>
    );
}

export default MovieDetail;
