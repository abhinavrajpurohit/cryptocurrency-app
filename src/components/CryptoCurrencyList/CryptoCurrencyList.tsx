/**
 |-----------------------------------------------------------------------------------------------
 | Importing Component Dependencies & Rendering Cryptocurrency Coins Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |-----------------------------------------------------------------------------------------------
 */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PageAssets, AssetsData, CryptoCurrencyVars, Markets } from '../../types/interfaces';
import { GET_CRYPTO_CURRENCY } from '../../graphql/get-assets';
import Loader from '../Shared/Spinner';
import Error from '../Shared/Error';
import NoDataMessage from '../Shared/NoDataMessage';
import { AppContext } from '../../App';

/**
 * This is a cryptocurrency coins component defination displaying cryptocurrency coins.
 *
 * @return Return a cryptocurrency coins component
 */
const CryptoCurrencyList: React.FC = () => { 
    /**
     * These are useState, useContext and useHistory hooks for state, context and routing.
     *
     * @hook useState - Hook to manage component state
     * @hook useContext - Hook for state management
     * @hook useHistory - Hook for routing
     */
    const [ offset, setOffset ] = useState<number>(0);
    const { state, dispatch } = useContext(AppContext);
    const history = useHistory();

    /**
     * This is a function to add last price of all markets of a coin.
     *
     * @param number acc - Passing zero as default value for addition
     * @param object curr - Passing market object
     * @return Return a addition of all markets of a coin
     */
    function addResult(acc, curr) {
        return acc + parseInt(curr.ticker.lastPrice)
    }

    /**
     * This is a function to customise list of markets and dispatching it.
     *
     * @param array asset - Passing markets array
     * @result Dispatching coin exchange markets and routing to exhange mmarkets page
     */
    const filterExchange = (asset: PageAssets) => {
        let assetMarkets: Markets[] = [];
        [...new Set(asset.markets.map(item => item.exchangeSymbol))].filter(coin => { assetMarkets.push({"exchangeSymbol": coin, markets: []}); return true; });
        asset.markets.filter(item => {
            const index: number = assetMarkets.findIndex(market => market.exchangeSymbol === item.exchangeSymbol);
            if(index !== -1) {
                assetMarkets[index].markets.push(item);
            }
            return true;
        });
        
        dispatch({ type: 'UPDATE_COIN_DATA', data: { coinMarkets: assetMarkets, coinMarketDetail: {}, searchText: '' },});
        localStorage.setItem('coinMarkets', JSON.stringify(assetMarkets));
        history.push('/coin-pairs-exchange');
    };

    /**
     * This is a useQuery to make an api call to graphql server with passed query.
     *
     * @param object GET_CRYPTO_CURRENCY - Passing graphql assets query
     * @param object variables - Passing filters and paging
     * @return Return cryptocurrency assets object
     */
    const { loading, error, data } = useQuery<AssetsData, CryptoCurrencyVars>(GET_CRYPTO_CURRENCY, {
        variables: {
            skip: offset,
            limit: 25,
            search: `${state.coinData.searchText}%`
        }
    });

    /**
     * Rendering Loading while api is in progress
     */
    if (loading) return <Loader />

    /**
     * Rendering error message
     */
    if (error) return <Error error = "{ error.message }" />;

    /**
     * Rendering message when search results couldn't found
     */
    if (data && !data.assets.length) { 
        const message = `Sorry, we couldn't find any results matching ${ state.coinData.searchText }`;
        return <NoDataMessage success = { message } />;
    }

    /**
     * Rendering cryptocurrency coins in component
     */
    return (
        <div className = "table-responsive px-5">
            <table className = "table">
                <thead className = "thead-light">
                    <tr>
                        <th scope = "col">Name</th>
                        <th scope = "col">Pair</th>
                        <th scope = "col">Market Cap Rank</th>
                        <th scope = "col">Market Cap</th>
                        <th scope = "col">Average Last Price</th>
                    </tr>
                </thead>
                <tbody className = "bg-white">
                    { data && data.assets.map(asset => (
                        <tr key = { asset.id }>
                            <th scope = "row"><button className = "btn" onClick = { () => filterExchange(asset) }>{ asset.assetName }</button></th>
                            <td>{ asset.assetSymbol }</td>
                            <td>{ asset.marketCapRank || 'Not Available' }</td>
                            <td>{ asset.marketCap || 'Not Available' }</td>
                            <td>
                                {
                                    asset.markets
                                    .filter(obj => obj.ticker != null)
                                    .reduce(addResult, 0) / asset.markets.length || 'Not Available'
                                }
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th scope = "row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className = "pagination d-flex w-100">
                                <ul className = "ml-auto d-flex list-unstyled">
                                    <li className = "p-2">View</li>
                                    <li className = "p-2"><button onClick = { () => setOffset(offset - 25) } disabled = { offset === 0 }>25</button></li>
                                    <li className = "p-2"><button onClick = { () => setOffset(offset + 25) } disabled = { offset === 25 || (data && data.assets.length<25) }>50</button></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

/**
 * Exporting cryptocurrency coins component
 */
export default CryptoCurrencyList;
