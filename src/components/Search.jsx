import React from 'react'
import Sidebar from './Sidebar';
import useFilter from '../hooks/useFilter';
import SearchProducts from './SearchProducts';
import Loader from './Loader';
const Search = () => {
    const { isLoading } = useFilter();
    useFilter();

    return (
        <div className='search'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="results">
                {isLoading ? (<Loader />)
                    : (<SearchProducts />)
                }
            </div>
        </div>
    )
}

export default Search
