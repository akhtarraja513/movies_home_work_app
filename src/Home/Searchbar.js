import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import SortByGener from '../sort/SortByGener';

const Searchbar = () => {
    const { query, setQuery, error } = useContext(AppContext);
    return (
        <>
            <h2>Search Your Favorite Movie</h2>
            <form className='search-sort'>
                <div>
                    <input type="text"
                        placeholder='search here...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <span>
                    <SortByGener/>
                </span>
            </form>
            <div className='card-error'>
                <p>{error.show && error.msg}</p>
            </div>
        </>
    )
}

export default Searchbar