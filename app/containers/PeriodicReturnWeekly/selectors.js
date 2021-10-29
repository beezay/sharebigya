import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the periodicReturnWeekly state domain
 */

const selectPeriodicReturnWeeklyDomain = state =>
  state.periodicReturnWeekly || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PeriodicReturnWeekly
 */

const makeSelectPeriodicReturnWeekly = () =>
  createSelector(
    selectPeriodicReturnWeeklyDomain,
    substate => substate,
  );

export default makeSelectPeriodicReturnWeekly;
export { selectPeriodicReturnWeeklyDomain };
