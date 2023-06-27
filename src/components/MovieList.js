import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../App.css';
import Search from './Search';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(res => res.json())
            .then(setMovies);
    }, []);

    return (
        <div className="movie-list-container">
            <div className='search-container'>
                    <Search setSearchTerm={setSearchTerm} />
                <div className="movie-list">
                    {movies
                        .filter(movie => movie.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
                        .map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                        }
                </div>
            </div>
        </div>
    );
}

export default MovieList;



