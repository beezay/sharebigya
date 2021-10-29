import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dailyVolReturn state domain
 */

const selectDailyVolReturnDomain = state =>
  state.dailyVolReturn || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DailyVolReturn
 */

const makeSelectDailyVolReturn = () =>
  createSelector(
    selectDailyVolReturnDomain,
    substate => substate,
  );

export default makeSelectDailyVolReturn;
export { selectDailyVolReturnDomain };
