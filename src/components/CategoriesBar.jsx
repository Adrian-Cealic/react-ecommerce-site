import React from 'react'
import { CATEGORIES } from '../constants/categories.js'
// TODO: adauga categorie,adauga in bd parfumuri barbati,unisex,femei,de nisa,note olfactive : floral,condimentat,lemnos,fresh...si seturi de parfumuri
const CategoriesBar = () => {
    return (
        <div>
            {CATEGORIES.map(category => (
                <div key={category.name} className="">
                    <h4>{category.name}</h4>
                </div>
             ))}
        </div>
    )
}

export default CategoriesBar
