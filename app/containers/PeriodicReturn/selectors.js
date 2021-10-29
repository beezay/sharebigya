import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the periodicReturn state domain
 */

const selectPeriodicReturnDomain = state =>
  state.periodicReturn || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PeriodicReturn
 */

const makeSelectPeriodicReturn = () =>
  createSelector(
    selectPeriodicReturnDomain,
    substate => substate,
  );

export default makeSelectPeriodicReturn;
export { selectPeriodicReturnDomain };
