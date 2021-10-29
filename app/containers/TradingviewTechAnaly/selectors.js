import { createSelector } from 'reselect';
import { initialState } from './reducer';


/**
 * Direct selector to the tradingviewTechAnaly state domain
 */

const selectTradingviewTechAnalyDomain = state =>
  state.tradingviewTechAnaly || initialState;
// const selectTradingviewTechAnalyDomain = state =>
//   state.TradingViewData || initialState;




/**
 * Other specific selectors
 */

/**
 * Default selector used by TradingviewTechAnaly
 */

const makeSelectTradingviewTechAnaly = () =>
  createSelector(
    selectTradingviewTechAnalyDomain,
    substate => substate,
  );

export default makeSelectTradingviewTechAnaly;
export { selectTradingviewTechAnalyDomain };
