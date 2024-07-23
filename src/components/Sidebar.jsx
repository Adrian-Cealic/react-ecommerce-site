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



  return (
    <div className='pl-8'>
      <PriceRange onChange={handleOnChange} />
      <DropDown onChange={handleOnChange} uniqueTypes={uniqueTypes} />
      <div className="bg-gray-200 mb-4 text-sm px-4 py-2">
        <CategoriesBar onSelect={handleOnSelect} />
      </div>
    </div>
  );
};

export default Sidebar;
