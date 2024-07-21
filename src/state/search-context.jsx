import React, { createContext, useContext, useReducer } from 'react';
import initialSearchState from './initialSearchState';
import { searchReducer } from './search-reducer';

const searchStateContext = createContext('searchState');

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, { ...initialSearchState });
    return (
        <searchStateContext.Provider value={[state, dispatch]}>
            {children}
        </searchStateContext.Provider>
    );
};

const useSearchState = () => {
    const context = useContext(searchStateContext);
    console.log("context : " + { context });

    return context;
}
export { useSearchState };
export default searchStateContext;
