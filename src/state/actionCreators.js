import { SET_PRODUCTS, SET_FILTER } from './actionTypes';

export const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products, //trimitem pproducts
    }
};

export const setFilter = (type, value) => {
    return {
        type: SET_FILTER,
        payload: { type, value }, //trimitem type si value
    };
};
