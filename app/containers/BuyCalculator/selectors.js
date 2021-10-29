import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the buyCalculator state domain
 */

const selectBuyCalculatorDomain = state => state.buyCalculator || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BuyCalculator
 */

const makeSelectBuyCalculator = () =>
  createSelector(
    selectBuyCalculatorDomain,
    substate => substate,
  );

export default makeSelectBuyCalculator;
export { selectBuyCalculatorDomain };
