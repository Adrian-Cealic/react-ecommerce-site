import axios from 'axios';
import { useEffect } from 'react';
import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

const useFilter = () => {
    const [state, dispatch] = useSearchState();

    const getProducts = () => {
        dispatch(setProducts([]));

        const params = {
            brandName: state.filters.brandName,
            gender: state.filters.gender,
            type: state.filters.type,
            fragranceType: state.filters.fragranceType,
        }

        axios.get(BASE_URL, { params })
            .then(({ data }) => {
                dispatch(setProducts(data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    useEffect(() => {
        getProducts()
    }, [state.filters]);

};

export default useFilter;
