import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the advDec state domain
 */

const selectAdvDecDomain = state => state.advDec || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdvDec
 */

const makeSelectAdvDec = () =>
  createSelector(
    selectAdvDecDomain,
    substate => substate,
  );

export default makeSelectAdvDec;
export { selectAdvDecDomain };
