import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card">
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.img} alt={movie.title} />
                <p>{movie.description}</p>
                <p>Director: {movie.director}</p>
                <p>Rating: {movie.rating}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
