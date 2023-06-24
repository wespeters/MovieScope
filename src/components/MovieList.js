import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(res => res.json())
            .then(setMovies);
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            <Link to="/movies/new">Add Movie</Link>
        </div>
    );
}

export default MovieList;
