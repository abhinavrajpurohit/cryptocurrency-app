/**
 |--------------------------------------------------------------
 | Importing Interfaces & Exporting Coin Reducer Function !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { IState, IAction } from '../types/interfaces';

/**
 * This is a reducer helper function which return the updated state based on action fired.
 *
 * @param object state - Containing previous state
 * @param object action - Type of action with dispatched data to update the global state
 * @return Return a updated state through context api to all child component
 */
export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case 'UPDATE_COIN_DATA':
          return { coinData: action.data };
      default:
        return state;
    }
}