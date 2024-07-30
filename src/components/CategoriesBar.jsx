// hooks
import { useState, useEffect } from 'react';
// constants
import { CATEGORIES } from '../constants/categories.js';

const CategoriesBar = ({ onSelect, onRemove, resetFilters, setResetFilters }) => {
  const [activeCategory, setActiveCategory] = useState({ gender: null, type: null, fragranceType: null });

  useEffect(() => {
    if (resetFilters) {
      setActiveCategory({ gender: null, type: null, fragranceType: null });
      onRemove('gender');
      onRemove('type');
      onRemove('fragranceType');
      setResetFilters(false);
    }
  }, [resetFilters, onRemove, setResetFilters]);

  const setCategory = (categoryType) => (e) => {
    const value = e.target.innerText;
    onSelect({ categoryType, value });
    setActiveCategory((prev) => ({
      ...prev,
      [categoryType]: value,
    }));
  };

  const handleRemoveCategory = (categoryType) => () => {
    onRemove(categoryType);
    setActiveCategory((prev) => ({
      ...prev,
      [categoryType]: null,
    }));
  };

  return (
    <div>
      {CATEGORIES.map((category, idx) => (
        <div key={idx}>
          {category.gender && (
            <>
              <h1 className='font-krona font-bold mt-4 mb-2'>Gender:</h1>
              <ul className='mt-4 mb-2 space-y-2 ml-4'>
                {category.gender.map(gender => (
                  <li
                    onClick={setCategory('gender')}
                    className={`cursor-pointer hover:text-accent ${activeCategory.gender === gender ? 'text-accent' : ''}`}
                    key={`${category.name}-${gender}`}
                  >
                    {gender}
                  </li>
                ))}
              </ul>
              {activeCategory.gender && (
                <button
                  onClick={handleRemoveCategory('gender')}
                  className='text-red-500 hover:text-red-700'
                  aria-label={`Remove gender filter: ${activeCategory.gender}`}
                >
                  &times;
                </button>
              )}
            </>
          )}
          {category.type && (
            <>
              <h1 className='font-krona font-bold mt-4 mb-2'>Types:</h1>
              <ul className='mt-4 mb-2 space-y-2 ml-4'>
                {category.type.map(type => (
                  <li
                    onClick={setCategory('type')}
                    className={`cursor-pointer hover:text-accent ${activeCategory.type === type ? 'text-accent' : ''}`}
                    key={`${category.name}-${type}`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
              {activeCategory.type && (
                <button
                  onClick={handleRemoveCategory('type')}
                  className='text-red-500 hover:text-red-700'
                  aria-label={`Remove type filter: ${activeCategory.type}`}
                >
                  &times;
                </button>
              )}
            </>
          )}
          {category.fragranceType && (
            <>
              <h2 className='font-krona font-bold mt-4 mb-2'>Parfume types:</h2>
              <ul className='space-y-2 ml-4'>
                {category.fragranceType.map(fragranceType => (
                  <li
                    onClick={setCategory('fragranceType')}
                    className={`cursor-pointer hover:text-accent ${activeCategory.fragranceType === fragranceType ? 'text-accent' : ''}`}
                    key={`${category.name}-${fragranceType}`}
                  >
                    {fragranceType}
                  </li>
                ))}
              </ul>
              {activeCategory.fragranceType && (
                <button
                  onClick={handleRemoveCategory('fragranceType')}
                  className='text-red-500 hover:text-red-700'
                  aria-label={`Remove fragrance type filter: ${activeCategory.fragranceType}`}
                >
                  &times;
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
