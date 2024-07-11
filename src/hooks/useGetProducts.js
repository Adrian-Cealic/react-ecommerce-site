import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetProducts = () => {
    const [maleProducts, setMaleProducts] = useState([]);


    const BASE_URL = 'https://my-fragrance-api-v2.onrender.com/products';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL);
                setMaleProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    //SingleProduct nu lucreaza

    // const getSingleProduct = async (productId) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}`, {
    //             params: { productId }
    //         });
    //         setSingleProduct(response.data); // Update singleProduct with fetched data
    //         console.log(singleProduct);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return { maleProducts };
};

export default useGetProducts;
