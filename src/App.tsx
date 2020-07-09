/**
 |--------------------------------------------------------------
 | Importing Component Dependencies & Rendering App Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IState } from './types/interfaces';
import { reducer } from './reducers/CoinReducer';
import SearchCurrency from './components/SearchCurrency/SearchCurrency';
import CryptoCurrencyList from './components/CryptoCurrencyList/CryptoCurrencyList';
import CryptoCurrencyCardCoinPairs from './components/CryptoCurrencyCardCoinPairs/CryptoCurrencyCardCoinPairs';
import CryptoCurrencyCardCoinDetail from './components/CryptoCurrencyCardCoinDetail/CryptoCurrencyCardCoinDetail';

/**
 * Setting up initial state for reducer function and fetching persisted data from local storage.
 */
const initalCoinMarkets = localStorage.getItem('coinMarkets');
const initalCoinMarketDetail = localStorage.getItem('coinMarketDetail');
const initialState: IState = {
  coinData: {
    coinMarkets: initalCoinMarkets !== null ? JSON.parse(initalCoinMarkets) : [],
    coinMarketDetail: initalCoinMarketDetail !== null ? JSON.parse(initalCoinMarketDetail) : {},
    searchText: ''
  }
};

/**
 * Creating context object and exporting so to make it accessible to all child component
 */
export const AppContext = React.createContext<IState | any>(initialState);

/**
 * This is a App component defination containing routing, header and context provider.
 *
 * @return Return a app component consisting context provider with wrapped header and routing 
 */
const App: React.FC = () => {
  /**
   * This is a useReducer hook to call reducer helper function with initial state and returns state with dispatcher method.
   *
   * @param funtion reducer - Passing reducer helper function
   * @param object initialState - Passing initial global state
   * @return Return a state and dispatcher method
   */
  const [ state, dispatch ] = useReducer(reducer, initialState);

  /**
   * Rendering app component
   */
  return (
    <AppContext.Provider value = {{ state, dispatch }}>
      <div className = "App-container">
        <header className = "App-header">
          <div className = "App-header-section d-flex p-5">
            <h3>Cryptocurrency Market</h3>
            <SearchCurrency />
          </div>
        </header>
        <Switch>
          <Route exact path = '/'><CryptoCurrencyList /></Route>
          <Route path = '/coin-pairs-exchange'><CryptoCurrencyCardCoinPairs /></Route>
          <Route path = '/coin-pairs-exchange-details'><CryptoCurrencyCardCoinDetail /></Route>
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

/**
 * Exporting app component
 */
export default App;
