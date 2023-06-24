import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieDetail({ match }) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${match.params.id}`)
            .then(res => res.json())
            .then(setMovie);
    }, [match.params.id]);

    return (
        <div>
            <h1>{movie.title}</h1>
            <Link to={`/movies/${match.params.id}/edit`}>Edit</Link>
        </div>
    );
}

export default MovieDetail;
