import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../App.css';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(res => res.json())
            .then(setMovies);
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
