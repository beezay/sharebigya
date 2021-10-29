import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the barChart state domain
 */

const selectBarChartDomain = state => state.barChart || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BarChart
 */

const makeSelectBarChart = () =>
  createSelector(
    selectBarChartDomain,
    substate => substate,
  );

export default makeSelectBarChart;
export { selectBarChartDomain };
