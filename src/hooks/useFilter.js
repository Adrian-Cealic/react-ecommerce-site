import axios from 'axios';
import { useEffect } from 'react';
import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const useFilter = () => {
    const [state, dispatch] = useSearchState();

    const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

    const getProducts = (type, value) => {
        dispatch(setProducts([]));

        const url = value === 'All' ? BASE_URL : `${BASE_URL}?${type}=${value}`;

        axios.get(url)
            .then(({ data }) => {
                dispatch(setProducts(data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const setFilter = (type, value) => {
        getProducts(type, value);
    };

    useEffect(() => {
        getProducts('type', 'All');
    }, []);

    return { setFilter };
};

export default useFilter;
