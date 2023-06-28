import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import AddMovieForm from './components/AddMovieForm';
import EditMovieForm from './components/EditMovieForm';  

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/add-movie" element={<AddMovieForm />} />
        <Route path="/movies/:id/edit" element={<EditMovieForm />} />
      </Routes>
    </Router>
  );
}

export default App;
