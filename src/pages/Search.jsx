// components
import Search from '../components/Search';
// useReducer
import { SearchProvider } from '../state/search-context';

const SearchPage = () => {

  return (
    <>
      <SearchProvider>
        <Search />
      </SearchProvider>
    </>
  );
}

export default SearchPage;
