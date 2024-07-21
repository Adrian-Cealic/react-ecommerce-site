import React from 'react'
import PriceRange from './PriceRange'
import CategoriesBar from './CategoriesBar'
const Sidebar = ({ setFilter }) => {

  return (
    <div className='pl-8'>
      <PriceRange />
      <div className="bg-gray-200 mb-4 text-sm px-4 py-2">
        <CategoriesBar setFilter={setFilter} />
      </div>
    </div>
  )
}

export default Sidebar
