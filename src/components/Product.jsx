import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ brandName, displayName, heroImage, quickLookDescription, productId, price }) => {
    return (
        <Link 
            className="group relative flex flex-col items-center mt-4 mb-4 px-4 py-4 transition delay-50 duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            to={`/product/${productId}`}
        >
            <img className='w-48 mx-auto mb-4' src={heroImage} alt="" />
            <div className="font-bold text-center">
                <p className='text-accent font-krona text-sm'>{brandName}</p>
                <p>{displayName}</p>
                <span>{price}</span>
                <p className='transition-all duration-300 transform translate-y-16 opacity-0 group-hover:-translate-y-14 group-hover:opacity-100 absolute -bottom-16 bg-white p-8 w-full left-0'>{quickLookDescription}</p>
            </div>
        </Link>
    );
};

export default Product;
