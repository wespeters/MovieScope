import React from "react";
import "./Search.css";

function Search({ setSearchTerm }) {
    
    const handleSubmit = (e) => e.preventDefault()

    return (
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    className="search_input"
                    type="text"
                    id="search"
                    placeholder="Search by Movie title..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
    )
}

export default Search