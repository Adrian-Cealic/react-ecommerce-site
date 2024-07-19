import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import { SORTING } from '../constants/sorting';

const CombinedDropDown = ({ onChange }) => {

    const { products } = useGetProducts();
    const uniqueTypes = ['All', ...new Set(products.map(product => product.brandName))];


    return (
        <div className="flex flex-row p-2 gap-4">
            <div className="flex flex-col">
                <label className='font-bold font-krona text-sm mb-2' htmlFor="brandName">Brand</label>
                <select className='font-krona text-sm focus:ring-2 focus:ring-accent outline-none rounded-md border-b-2 border-accent' name="brandName" id="brandName"
                    onChange={onChange}>
                    {uniqueTypes.map((type, index) => (
                        <option key={index} value={[type]}>{type}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='font-bold font-krona text-sm mb-2' htmlFor="price">Price</label>
                <select className='font-krona text-sm focus:ring-2 focus:ring-accent outline-none rounded-md border-b-2 border-accent' name="price" id="price"
                    onChange={onChange}>
                    {SORTING.map((sort, idx) => (
                        <option key={idx} value={sort}>{sort}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CombinedDropDown;
