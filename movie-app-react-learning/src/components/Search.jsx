import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
    // Props which are passed to the child component, should always be read-only.
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input 
                    type="text"
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Search