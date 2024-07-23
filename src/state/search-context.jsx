// search-context.js
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
    if (!context) {
        throw new Error('useSearchState must be used within a SearchProvider');
    }
    return context;
};

export { useSearchState };
export default searchStateContext;
