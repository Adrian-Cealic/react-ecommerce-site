import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetProducts from '../hooks/useGetProducts';
import {  useLocation } from 'react-router-dom'

// react-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionTitle from '../components/SectionTitle';
import Benefiets from '../components/Benefiets';

const Product = () => {

    //scroll to top when url changes
    const location = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { productId } = useParams();
    const { maleProducts } = useGetProducts();

    const [recommendedProducts, setRecommendedProducts] = useState([]);


    const product = maleProducts.find(product => product.productId === productId);

    useEffect(() => {
        if (product) {
            const recommended = maleProducts.filter(
                p => p.fragranceFamily === product.fragranceFamily && p.productId !== product.productId
            );
            setRecommendedProducts(recommended);
        }
    }, [product, maleProducts]);


    return (
        <div className='container p-8'>
            {product ? (
                <>
                    <div className='h-screen'>


                        <div className="mb-10">
                            <h1 className='font-krona font-bold text-sm'>{product.brandName} {product.displayName}</h1>
                            <span className='lowercase text-dark-grey font-krona'>{product.fragranceFamily}</span>
                        </div>


                        <div className="flex">
                            <div className="flex-1 flex justify-center items-center">
                                <img className='w-96' src={product.heroImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <p className='text-accent font-krona text-sm'>{product.scentType}</p>
                                <h1 className='font-krona font-bold text-base'>{product.brandName} {product.displayName}</h1>

                                <div className="flex my-10 justify-between">
                                    <p className='font-krona font-bold text-xl'>{product.price}</p>
                                    <div>counter</div>
                                    <button className='lowercase inline-block rounded-full font-bold font-krona text-black bg-accent px-8 py-4 text-xs'>
                                        add to basket
                                    </button>

                                </div>

                                <span className='font-bold'>Description:</span>
                                <p className=''>{product.longDescription}</p>
                                <span className='font-bold'>Key notes:</span>
                                <p>{product.keyNotes}</p>
                                <span className='font-bold'>Ingredients:</span>
                                <p>{product.ingredientDesc}</p>
                            </div>
                        </div>

                    </div>
                    {/* for you */}
                    {/* depending on fragranceFamily */}
                    <SectionTitle text={"For you:"}/>
                    <div className="mb-20">
                        <Carousel responsive={responsive}>
                            {recommendedProducts.map((recProduct) => (
                                <Link to={`/product/${recProduct.productId}`} className='group relative' key={recProduct.productId}>
                                    <img className='w-48 mx-auto mb-4' src={recProduct.heroImage} alt="" />
                                    <div className="font-bold text-center mb-4">
                                        <p className='text-accent font-krona text-sm'>{recProduct.brandName}</p>
                                        <p>{recProduct.displayName}</p>
                                        <p className='transition-all duration-300 transform translate-y-16 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 absolute -bottom-16 bg-white p-8 w-full left-0'>{recProduct.quickLookDescription}</p>
                                        <span>{recProduct.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </Carousel>
                        <Benefiets/>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Product;
