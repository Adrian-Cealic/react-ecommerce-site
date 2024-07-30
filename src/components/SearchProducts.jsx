// components
import Product from './Product'
// hooks
import { useSearchState } from '../state/search-context';

const SearchProducts = () => {

    const [{ products }] = useSearchState();

    return (
        products.length === 0 ? (
            <div className='text-center flex-wrap mt-8'>
                <h4 className='font-krona'>Sorry, no products</h4>
                <p>Please change your filters</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-2">

                {products.map(product => (
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

    )
}

export default SearchProducts
