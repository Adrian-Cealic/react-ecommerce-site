import React from 'react'
import { useState } from 'react'
import { CATEGORIES } from '../constants/categories.js'
const CategoriesBar = ({ setFilter, products }) => {

    const [activeCategory, setActiveCategory] = useState(null);

    const handleFilter = (type, value) => {
        setFilter(type, value);
        if (type === 'gender' || type === 'type' || type === 'fragranceType') {
            setActiveCategory(value);
        }

    }

    return (
        <div className=''>
            {CATEGORIES.map((category, idx) => (
                <div key={idx} className="">
                    <h1 className='font-krona font-bold mt-4 mb-2'>Gender:</h1>
                    <ul className='mt-4 mb-2 space-y-2 ml-4'>
                        {category.gender.map(gender => (
                            <li onClick={() => handleFilter('gender', gender)} className={`cursor-pointer hover:text-accent ${activeCategory === gender ? 'text-accent' : ''}`} key={`${category.name}-${gender}`}>{gender}</li>
                        ))}
                    </ul>
                    <h1 className='font-krona font-bold mt-4 mb-2'>Types:</h1>
                    <ul className='mt-4 mb-2 space-y-2 ml-4'>
                        {category.type.map(type => (
                            <li onClick={() => handleFilter('type', type)} className={`cursor-pointer hover:text-accent ${activeCategory === type ? 'text-accent' : ''}`} key={`${category.name}-${type}`}>{type}</li>
                        ))}
                    </ul>
                    <h1 className='font-krona font-bold mt-4 mb-2'>Notes:</h1>
                    <ul className='space-y-2 ml-4'>
                        {category.notes.map(note => (
                            <li className='cursor-pointer hover:text-accent' key={`${category.name}-${note}`}>{note}</li>
                        ))}
                    </ul>
                    <h2 className='font-krona font-bold mt-4 mb-2'>Parfume types:</h2>
                    <ul className='space-y-2 ml-4'>
                        {category.fragranceType.map(fragranceType => (
                            <li onClick={() => handleFilter('fragranceType', fragranceType)} className={`cursor-pointer hover:text-accent ${activeCategory === fragranceType ? 'text-accent' : ''}`} key={`${category.name}-${fragranceType}`}>{fragranceType}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CategoriesBar
