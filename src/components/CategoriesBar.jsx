import React from 'react'
import { CATEGORIES } from '../constants/categories.js'
// TODO: adauga categorie,adauga in bd parfumuri barbati,unisex,femei,de nisa,note olfactive : floral,condimentat,lemnos,fresh...si seturi de parfumuri
const CategoriesBar = () => {
    return (
        <div className=''>
            {CATEGORIES.map(category => (
                <div key={category.name} className="">
                    <ul className='mt-4 mb-2 space-y-2 ml-4'>
                        {category.gender.map(gender => (
                            <li className='cursor-pointer hover:text-accent' key={`${category.name}-${gender}`}>Parfumes {gender}</li>
                        ))}
                    </ul>
                    <ul className='mt-4 mb-2 space-y-2 ml-4'>
                        {category.type.map(type => (
                            <li className='cursor-pointer hover:text-accent' key={`${category.name}-${type}`}>{type} Parfumes</li>
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
                        {category.fragranceType.map(fragranceType=> (
                            <li className='cursor-pointer hover:text-accent' key={`${category.name}-${fragranceType}`}>{fragranceType}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CategoriesBar
