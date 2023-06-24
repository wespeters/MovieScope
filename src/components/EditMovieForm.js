import React, { useState, useEffect } from 'react';

function EditMovieForm({ match }) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${match.params.id}`)
            .then(res => res.json())
            .then(data => setTitle(data.title));
    }, [match.params.id]);

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/movies/${match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title }),
        })
            .then(response => response.json())
            .then(data => window.location.href = `/movies/${match.params.id}`)
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

export default EditMovieForm;
