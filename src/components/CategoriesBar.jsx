import React, { useState } from 'react';
import { CATEGORIES } from '../constants/categories.js';

const CategoriesBar = ({ onSelect }) => {
    const [activeCategory, setActiveCategory] = useState({ gender: null, type: null, fragranceType: null });

    const setCategory = (categoryType) => (e) => {
        const value = e.target.innerText;

        onSelect({ categoryType, value });
        setActiveCategory((prev) => ({
            ...prev,
            [categoryType]: value,
        }));
    };

    return (
        <div>
            {CATEGORIES.map((category, idx) => (
                <div key={idx}>
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
                </div>
            ))}
        </div>
    );
};


export default CategoriesBar;
