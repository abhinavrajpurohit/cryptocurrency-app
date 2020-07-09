
/**
|--------------------------------------------------
| All the interfaces !!
|--------------------------------------------------
*/
export interface PageAssets {
    id: string;
    assetName: string;
    assetSymbol: string;
    marketCap: number;
    marketCapRank: number;
    markets: MarketData[];
}
  
export interface MarketData {
    marketSymbol: string;
    baseSymbol: string;
    exchangeSymbol: string;
    ticker: TickerData;
}

export interface TickerData {
    lastPrice: number;
    highPrice: number;
    lowPrice: number;
    percentChange: number;
}

export interface AssetsData {
    assets: PageAssets[];
}

export interface CryptoCurrencyVars {
    skip: number;
    limit: number;
    search: string;
}

export interface Markets {
    exchangeSymbol: string;
    markets: MarketData[];
}

export interface CoinData {
    coinMarkets: Array<Markets>;
    coinMarketDetail: MarketData;
    searchText: string;
}

export interface IState {
    coinData: CoinData
}

export interface IAction {
    type: string;
    data: CoinData;
}

export interface ErrorProps {
    error: string;
}

export interface SuccessProps {
    success: string;
}