import axios from 'axios';
import { useEffect, useState } from 'react';

const useFilter = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

    const getProducts = (type, value) => {
        setProducts([]);
        setIsLoading(true);
        if (value === 'All') {
            axios.get(BASE_URL)
                .then(response => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        } else {
            axios.get(`${BASE_URL}?${type}=${value}`)
                .then(response => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setIsLoading(true);
                });
        }
    }

    const setFilter = (type, value) => {
        getProducts(type, value);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return { products, setFilter, isLoading };
};

export default useFilter;
