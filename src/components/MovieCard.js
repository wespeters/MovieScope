import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`} className="movie-card">
            <div>
                <h2>{movie.title}</h2>
                <img className="movie-img" src={movie.img} alt={movie.title} />
                <p>{movie.description}</p>
                <p>Director: {movie.director}</p>
                <p>Rating: {movie.rating}/10</p>
            </div>
        </Link>
    );
}

export default MovieCard;
