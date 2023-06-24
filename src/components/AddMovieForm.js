import React, { useState } from 'react';

function AddMovieForm() {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title }),
        })
            .then(response => response.json())
            .then(data => window.location.href = '/')
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default AddMovieForm;
