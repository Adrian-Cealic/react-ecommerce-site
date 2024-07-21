import React from 'react';
import Search from '../components/Search';
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
