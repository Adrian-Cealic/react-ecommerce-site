import React from 'react'
import Sidebar from './Sidebar';
import useFilter from '../hooks/useFilter';
import SearchProducts from './SearchProducts';
const Search = () => {
    useFilter();
    
    return (
        <div className='search'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <SearchProducts />
        </div>
    )
}

export default Search
