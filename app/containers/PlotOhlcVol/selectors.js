import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the plotOhlcVol state domain
 */

const selectPlotOhlcVolDomain = state => state.plotOhlcVol || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PlotOhlcVol
 */

const makeSelectPlotOhlcVol = () =>
  createSelector(
    selectPlotOhlcVolDomain,
    substate => substate,
  );

export default makeSelectPlotOhlcVol;
export { selectPlotOhlcVolDomain };
