/**
 |-------------------------------------------------------------------------------------
 | Importing Component Dependencies & Rendering Cryptocurrency Coin Detail Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |-------------------------------------------------------------------------------------
 */
import React, { useContext } from 'react';
import { AppContext } from '../../App';

/**
 * This is a cryptocurrency detail component defination displaying cryptocurrency market details.
 *
 * @return Return a cryptocurrency market details component
 */
const CryptoCurrencyCardCoinDetail: React.FC = () => { 
    /**
     * This is a useContext hook to get updated state with dispatcher method.
     *
     * @param object AppContext - Passing context object
     * @return Return a state and dispatcher method
     */
    const { state, dispatch } = useContext(AppContext);
    
    /**
     * Rendering cryptocurrency market details component
     */
    return (
        <div className = "card-detail-container px-5">
            <div className = "coin-pairs py-4">
                <h5>{ state?.coinData?.coinMarketDetail?.exchangeSymbol }</h5>
                <div className = "row row-cols-1 row-cols-md-2">
                    <div className = "col mb-4">
                        <div className = "card shadow rounded">
                            <div className = "card-body">
                                <h5 className = "card-title">{ state?.coinData?.coinMarketDetail?.exchangeSymbol }</h5>
                                <div className = "d-flex w-100 border-bottom">
                                    <div className = "w-50 mb-2">
                                        <h5 className = "text-info mb-0">{ state?.coinData?.coinMarketDetail?.marketSymbol }</h5>
                                        <span className = "text-secondary">Pair</span>
                                    </div>
                                    <div className = "w-50 mb-2 ml-auto">
                                        <h5 className = "text-info mb-0">{ state?.coinData?.coinMarketDetail?.ticker?.lastPrice || 'Not Available' }</h5>
                                        <span className = "text-secondary">Price</span>
                                    </div>
                                </div>
                                <div className = "d-flex w-100 mt-4">
                                    <div className = "w-25">
                                        <h6 className = "text-dark mb-0">{ state?.coinData?.coinMarketDetail?.ticker?.lastPrice || 'Not Available' }</h6>
                                        <span className = "text-secondary">Last Price</span>
                                    </div>
                                    <div className = "w-25">
                                        <h6 className = { "mb-0 " + (state?.coinData?.coinMarketDetail?.ticker?.percentChange > 0 ? 'text-success' : 'text-danger') }>{ state?.coinData?.coinMarketDetail?.ticker?.percentChange  || 'Not Available' }</h6>
                                        <span className = "text-secondary">24 h Change</span>
                                    </div>
                                    <div className = "w-25">
                                        <h6 className = "text-dark mb-0">{ state?.coinData?.coinMarketDetail?.ticker?.lowPrice || 'Not Available' }</h6>
                                        <span className = "text-secondary">24 h Low</span>
                                    </div>
                                    <div className = "w-25 ml-auto">
                                        <h6 className = "text-dark mb-0">{ state?.coinData?.coinMarketDetail?.ticker?.highPrice || 'Not Available' }</h6>
                                        <span className = "text-secondary">24 h High</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Exporting cryptocurrency market details component
 */
export default CryptoCurrencyCardCoinDetail;