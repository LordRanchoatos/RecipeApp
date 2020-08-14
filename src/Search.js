import React, { useState } from 'react';

const Search = ( {getQuery } ) => {
    const [term, setTerm] = useState("")

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault();
        getQuery(term);
    }

    return(
        <form className="search-form" onSubmit={formSubmit}>
            <input
            placeholder="Search recipe"
            className="search-bar"
            value={term} onChange={handleChange}/>
            <button className="search-button">search</button>
    </form>
    )
}

export default Search;