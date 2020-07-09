/**
 |-----------------------------------------------------------------
 | Importing Component Dependencies & Rendering Search Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |-----------------------------------------------------------------
 */
import React, { useContext } from 'react';
import { AppContext } from '../../App';

/**
 * This is a search cryptocurrency component defination containing search bar that helps to search cryptocurrency.
 *
 * @return Return a search cryptocurrency component
 */
const SearchCurrency: React.FC = () => { 
    /**
     * This is a useContext hook to get updated state with dispatcher method.
     *
     * @param object AppContext - Passing context object
     * @return Return a state and dispatcher method
     */
    const { state, dispatch } = useContext(AppContext);

    /**
     * This is a function to take search query string and dispatch an action.
     *
     * @param object searchValue - Passing search query string
     * @return Return a dispatch method
     */
    const changeInputValue = (searchValue) => {
        dispatch({ type: 'UPDATE_COIN_DATA', data: {coinMarkets: [], coinMarketDetail: {}, searchText: searchValue },});
    };

    /**
     * Rendering search component
     */
    return (
        <div className = "form-group has-search ml-auto">
            <span className = "fa fa-search form-control-feedback">
                <svg _ngcontent-uyg-c6="" fill="#495057" height="18" viewBox="0 5 20 20" width="15" xmlns="http://www.w3.org/2000/svg">
                <path _ngcontent-uyg-c6="" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59
                4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99
                14 9.5 14z">
                </path>
                <path _ngcontent-uyg-c6="" d="M0 0h24v24H0z" fill="none">
                </path>
                </svg>
            </span>
            <input type = "text" className = "form-control" 
                placeholder = "Search cryptocurrency, rates and prices" 
                value = { state?.coinData?.searchText }
                onChange={ e => changeInputValue(e.target.value) } />
        </div>
    );
}

/**
 * Exporting search cryptocurrency component
 */
export default SearchCurrency;