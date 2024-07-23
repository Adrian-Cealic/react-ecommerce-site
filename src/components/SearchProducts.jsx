import React from 'react'
import Product from './Product'
import Loader from './Loader';

import { useSearchState } from '../state/search-context';

const SearchProducts = () => {

    const [{ products }] = useSearchState();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-2">
            {products.length === 0 ? <Loader classes={"h-[0vh] ml-[100px] sm:ml-[300px] lg:ml-[400px] xl:ml-[600px] top-96"} /> :
                products.map(product => (
                    <Product
                        key={product.productId}
                        brandName={product.brandName}
                        displayName={product.displayName}
                        heroImage={product.heroImage}
                        altImg={product.altImage}
                        price={product.price}
                        productId={product.productId}
                        quickLookDescription={product.quickLookDescription}
                    />
                ))}
        </div>
    )
}

export default SearchProducts
