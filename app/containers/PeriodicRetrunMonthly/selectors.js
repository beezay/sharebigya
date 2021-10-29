import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the periodicRetrunMonthly state domain
 */

const selectPeriodicRetrunMonthlyDomain = state =>
  state.periodicRetrunMonthly || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PeriodicRetrunMonthly
 */

const makeSelectPeriodicRetrunMonthly = () =>
  createSelector(
    selectPeriodicRetrunMonthlyDomain,
    substate => substate,
  );

export default makeSelectPeriodicRetrunMonthly;
export { selectPeriodicRetrunMonthlyDomain };
