/**
 |-----------------------------------------------------------------------------------------------
 | Importing Component Dependencies & Rendering Cryptocurrency Coin Exchange Markets Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |-----------------------------------------------------------------------------------------------
 */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../App';
import NoDataMessage from '../shared/NoDataMessage';

/**
 * This is a cryptocurrency coin exchange markets component defination displaying coin exchange markets.
 *
 * @return Return a cryptocurrency coin exchange markets component
 */
const CryptoCurrencyCardCoinPairs: React.FC = () => { 
    /**
     * This is a useContext hook to get updated state with dispatcher method.
     *
     * @param object AppContext - Passing context object
     * @return Return a state and dispatcher method
     */
    const { state, dispatch } = useContext(AppContext);

    /**
     * This is a useHistory hook to get routing history object
     *
     * @return Return a routing history object
     */
    const history = useHistory();

    /**
     * This is a function to dispatch coin exchange market detail.
     *
     * @param object marketDetails - Passing coin exchange market detail
     * @result Dispatching coin exchange market detail and routing to detail page
     */
    const setExchangeMarketDetails = (marketDetails) => {
        const initalCoinMarkets = localStorage.getItem('coinMarkets');
        const assetMarkets = initalCoinMarkets !== null ? JSON.parse(initalCoinMarkets) : []
        dispatch({ type: 'UPDATE_COIN_DATA', data: { coinMarkets: assetMarkets, coinMarketDetail: marketDetails, searchText: '' },});
        localStorage.setItem('coinMarketDetail', JSON.stringify(marketDetails));
        history.push('/coin-pairs-exchange-details');
    }

    /**
     * Displaying message in case cryptocurrency coin exchange markets not found
     */
    if (state && !state.coinData.coinMarkets.length) return <NoDataMessage success = "Sorry, we couldn't find any exchange markets related to coin." />;

    /**
     * Rendering cryptocurrency coin exchange markets in component
     */
    return (
        <div className = "cards-container px-5">
            { state && state?.coinData?.coinMarkets.map(exchange => (
                <div key = { exchange?.exchangeSymbol } className = "coin-pairs py-4">
                    <h5>{ exchange?.exchangeSymbol }</h5>
                    <div className = "card-deck text-center h4 font-weight-bold">
                        { exchange && exchange?.markets.map(exchangeMarket => (
                            <div key = { exchangeMarket?.marketSymbol } className = "card shadow rounded">
                                <div className = "card-body">
                                    <p className = "card-text"><a href="#" className = "text-break" onClick = { () => setExchangeMarketDetails(exchangeMarket) }>{ exchangeMarket?.marketSymbol }</a></p>
                                    <p className = "card-text text-info">{ exchangeMarket?.ticker?.lastPrice || 'Not Available' }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            )) }
        </div>
    );
}

/**
 * Exporting cryptocurrency coin exchange markets component
 */
export default CryptoCurrencyCardCoinPairs;