import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetProducts from '../hooks/useGetProducts';
import { useLocation } from 'react-router-dom'

// react-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionTitle from '../components/SectionTitle';
import Benefiets from '../components/Benefiets';
import CartButton from '../components/CartButton';
import Loader from '../components/Loader';

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
    const { products } = useGetProducts();

    const [recommendedProducts, setRecommendedProducts] = useState([]);


    const product = products.find(product => product.productId === productId);

    useEffect(() => {
        if (product) {
            const recommended = products.filter(
                p => p.fragranceFamily === product.fragranceFamily && p.productId !== product.productId
            );
            setRecommendedProducts(recommended);
        }
    }, [product, products]);


    return (
        <div className='container p-8'>
            {product ? (
                <>
                    <div className='h-auto mb-20'>
                        <div className="mb-10">
                            <h1 className='font-krona font-bold text-sm'>{product.brandName} {product.displayName}</h1>
                            <span className='lowercase text-dark-grey font-krona'>{product.fragranceFamily}</span>
                        </div>

                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
                                <img className='w-80 md:w-90 lg:w-96' src={product.heroImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <p className='text-accent font-krona text-sm'>{product.scentType}</p>
                                <h1 className='font-krona font-bold text-base'>{product.brandName} {product.displayName}</h1>
                                <p className='font-krona text-sm'>{product.gender}</p>

                                <div className="flex flex-col sm:flex-row my-10 justify-between">
                                    <p className='font-krona font-bold text-xl'>{product.price}</p>
                                    <div>counter</div>
                                    <CartButton content={"add to basket"} />
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

                </>
            ) : (
                <Loader size={20}/>
            )}

            <SectionTitle text={"For you:"} />
            {
                recommendedProducts.length > 0 ? (
                    <>
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

                        </div>
                    </>
                ) : (
                    <p>No products available</p>
                )
            }

            <Benefiets />
        </div>
    );
};

export default Product;
