import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

function EditMovieForm() {
    const { id } = useParams(); 
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setDirector(data.director);
                setDescription(data.description);
                setRating(data.rating);
                setImg(data.img);
            });
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: title,
                director: director,
                description: description,
                rating: rating,
                img: img,
            }),
        })
            .then(res => res.json())
            .then(data => window.location.href = `/movies/${id}`)
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
            <label>
                Director:
                <input type="text" value={director} onChange={e => setDirector(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                Rating:
                <input type="number" min="0" max="10" value={rating} onChange={e => setRating(e.target.value)} />
            </label>
            <label>
                Image URL:
                <input type="text" value={img} onChange={e => setImg(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default EditMovieForm;
