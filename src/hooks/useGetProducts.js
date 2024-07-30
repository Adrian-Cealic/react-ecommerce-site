// axios
import axios from 'axios';
// hooks
import { useEffect, useState } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState([]);


    const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return { products };
};

export default useGetProducts;
