import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import './EditMovieForm.css';

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
        <div className='movie-form'>
            <h2>Edit Movie Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <br />
                    <input className="input-text" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label>Director:</label>
                    <br />
                    <input className="input-text" type="text" value={director} onChange={e => setDirector(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label>Description:</label>
                    <br />
                    <textarea className="textarea" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label>Rating:</label>
                    <br />
                    <input className="input-rating" type="number" min="0" max="10" value={rating} onChange={e => setRating(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                    <label>Image URL:</label>
                    <br />
                    <input className="input-text" type="text" value={img} onChange={e => setImg(e.target.value)} />
                </div>
                <br />
                <center>
                    <input className="submit-button" type="submit" value="Submit" />
                </center>
            </form>
        </div>
    );
}

export default EditMovieForm;
