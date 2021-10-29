import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the periodicReturnYearly state domain
 */

const selectPeriodicReturnYearlyDomain = state =>
  state.periodicReturnYearly || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PeriodicReturnYearly
 */

const makeSelectPeriodicReturnYearly = () =>
  createSelector(
    selectPeriodicReturnYearlyDomain,
    substate => substate,
  );

export default makeSelectPeriodicReturnYearly;
export { selectPeriodicReturnYearlyDomain };
