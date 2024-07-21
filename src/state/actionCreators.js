import { SET_PRODUCTS } from './actionTypes';

export const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
};
