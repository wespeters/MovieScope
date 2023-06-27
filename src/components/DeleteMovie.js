import React from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteMovie({ id }) {
    const navigate = useNavigate();

    function handleDelete() {
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Could not delete movie with ID ${id}`);
            }
            return res.json();
        })
        .then(() => {
            navigate('/');
        })
        .catch(error => console.error('Error:', error));
    }

    return (
        <button onClick={handleDelete}>Delete Movie</button>
    );
}

export default DeleteMovie;
