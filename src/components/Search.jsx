// components
import Sidebar from './Sidebar';
import SearchProducts from './SearchProducts';
import Loader from './Loader';
// hooks
import useFilter from '../hooks/useFilter';

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
