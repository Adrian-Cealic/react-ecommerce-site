import React from 'react'
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import useFilter from '../hooks/useFilter';
import SearchProducts from './SearchProducts';
const Search = () => {
    const { products, setFilter } = useFilter();

    return (
        <div className='search'>
            <div className="sidebar">
                <Sidebar setFilter={setFilter} products={products} />
            </div>
            <TopBar setFilter={setFilter} />
            <SearchProducts />
        </div>
    )
}

export default Search
