// hooks
import { Fragment, useState } from 'react';
// use reducer
import useGetProducts from '../hooks/useGetProducts';
import { useSearchState } from '../state/search-context';
import { setFilter } from '../state/actionCreators';
// components
import PriceRange from './PriceRange';
import CategoriesBar from './CategoriesBar';
import DropDown from './DropDown';
import SearchFilterResponsive from './SearchFilterResponsive';
// react-icons
import { RxCross1 } from "react-icons/rx";
import { FaFilter } from "react-icons/fa";

const Sidebar = () => {
  const [, dispatch] = useSearchState();
  const { products } = useGetProducts();
  const uniqueTypes = ['All', ...new Set(products.map(product => product.brandName))];

  const [showMenu, setShowMenu] = useState(false);
  const [resetFilters, setResetFilters] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

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
    setResetFilters(true);
  };

  return (
    <Fragment>
      <div className="flex gap-2 items-center p-2 bg-gray-100 rounded-md shadow-sm md:hidden">
        <p className='font-krona text-lg'>Filters</p>
        <FaFilter className='text-2xl cursor-pointer transition-all duration-200 ease-in transform hover:scale-110' onClick={toggleMenu} />
      </div>
      <div className='pl-8 hidden md:block'>
        <PriceRange onChange={handleOnChange} />
        <button onClick={clearAllFilters} className='bg-gray-200 p-2 my-2 font-krona rounded-md'>Clear all filters</button>
        <DropDown onChange={handleOnChange} uniqueTypes={uniqueTypes} />
        <div className="bg-gray-200 mb-4 text-sm px-4 py-2">
          <CategoriesBar onSelect={handleOnSelect} onRemove={handleRemoveFilter} resetFilters={resetFilters} setResetFilters={setResetFilters} />
        </div>
      </div>
      <div>
        <SearchFilterResponsive
          showMenu={showMenu}
          content={
            <div className="rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Filters</span>
                <RxCross1 className='text-3xl md:hidden cursor-pointer transition-all duration-200 ease-in' onClick={toggleMenu} />
              </div>
              <button onClick={clearAllFilters} className='bg-accent text-white p-2 rounded-md w-full'>Clear all filters</button>
              <PriceRange onChange={handleOnChange} />
              <DropDown onChange={handleOnChange} uniqueTypes={uniqueTypes} />
              <div className="bg-gray-200 mb-4 text-sm px-4 py-2 rounded-md">
                <CategoriesBar onSelect={handleOnSelect} onRemove={handleRemoveFilter} resetFilters={resetFilters} setResetFilters={setResetFilters} />
              </div>
            </div>
          }
        />
        {showMenu && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>}
      </div>
    </Fragment>
  );
};

export default Sidebar;
