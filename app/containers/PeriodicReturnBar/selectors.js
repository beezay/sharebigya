import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the periodicReturnBar state domain
 */

const selectPeriodicReturnBarDomain = state =>
  state.periodicReturnBar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PeriodicReturnBar
 */

const makeSelectPeriodicReturnBar = () =>
  createSelector(
    selectPeriodicReturnBarDomain,
    substate => substate,
  );

export default makeSelectPeriodicReturnBar;
export { selectPeriodicReturnBarDomain };
