// axios
import axios from 'axios';
// hooks
import { useEffect, useState } from 'react';
import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

const useFilter = () => {
    const [state, dispatch] = useSearchState();
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        dispatch(setProducts([]));
        setIsLoading(true);

        const params = {
            brandName: state.filters.brandName,
            gender: state.filters.gender,
            type: state.filters.type,
            fragranceType: state.filters.fragranceType,
            minPrice: state.filters.minPrice,
            maxPrice: state.filters.maxPrice,
        }


        axios.get(BASE_URL, { params })
            .then(({ data }) => {
                const filteredProducts = data.filter(product => {
                    const price = parseFloat(product.price.replace(/[$,]/g, ''));
                    const minPrice = state.filters.minPrice ? parseFloat(state.filters.minPrice) : 0;
                    const maxPrice = state.filters.maxPrice ? parseFloat(state.filters.maxPrice) : Infinity;

                    return price >= minPrice && price <= maxPrice;
                });

                const finalProducts = filteredProducts.filter(product => {
                    return (
                        (!state.filters.brandName || product.brandName === state.filters.brandName) &&
                        (!state.filters.gender || product.gender === state.filters.gender) &&
                        (!state.filters.type || product.type === state.filters.type) &&
                        (!state.filters.fragranceType || product.fragranceType === state.filters.fragranceType)
                    );
                });

                dispatch(setProducts(finalProducts));
                setIsLoading(false);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    useEffect(() => {
        getProducts()
    }, [state.filters]);

    return { isLoading };
};

export default useFilter;
