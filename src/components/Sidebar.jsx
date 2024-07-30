import React from 'react';
import PriceRange from './PriceRange';
import CategoriesBar from './CategoriesBar';
import useGetProducts from '../hooks/useGetProducts';
import DropDown from './DropDown';
import { useSearchState } from '../state/search-context';
import { setFilter } from '../state/actionCreators';

const Sidebar = () => {
  const [, dispatch] = useSearchState();

  const { products } = useGetProducts();
  const uniqueTypes = ['All', ...new Set(products.map(product => product.brandName))];


  const handleOnChange = e => {
    const { name, value } = e.target;
    dispatch(setFilter(name, value === 'All' ? null : value));
  };

  const handleOnSelect = ({ categoryType, value }) => {
    dispatch(setFilter(categoryType, value));
  };

  const handleRemoveFilter = (categoryType) => {
    dispatch(setFilter(categoryType, null));
  };

  const clearAllFilters = () => {
    dispatch(setFilter('brandName', null));
    dispatch(setFilter('gender', null));
    dispatch(setFilter('type', null));
    dispatch(setFilter('fragranceType', null));
    dispatch(setFilter('minPrice', null));
    dispatch(setFilter('maxPrice', null));
  };



  return (
    <div className='pl-8'>
      <PriceRange onChange={handleOnChange} />
      <button onClick={clearAllFilters} className='bg-gray-200 p-2 my-2 font-krona rounded-md'>Clear all filters</button>
      <DropDown onChange={handleOnChange} uniqueTypes={uniqueTypes} />
      <div className="bg-gray-200 mb-4 text-sm px-4 py-2">
        <CategoriesBar onSelect={handleOnSelect} onRemove={handleRemoveFilter} />
      </div>
    </div>
  );
};

export default Sidebar;
