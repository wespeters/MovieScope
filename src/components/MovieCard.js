import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.img} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
    );
}

export default MovieCard;
