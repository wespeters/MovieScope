import React from "react";

function Search({ setSearchTerm }) {
    
    const handleSubmit = (e) => e.preventDefault()

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    className="search_input"
                    type="text"
                    id="search"
                    placeholder="Search by Movie title..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
        </header>
    )
}

export default Search