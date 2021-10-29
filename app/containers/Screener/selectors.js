import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the screener state domain
 */

const selectScreenerDomain = state => state.screener || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Screener
 */

const makeSelectScreener = () =>
  createSelector(
    selectScreenerDomain,
    substate => substate,
  );

const selectScreenerData = () =>
  createSelector(
    selectScreenerDomain,
    screener => (screener.screenerData.length > 1 ? screener.screenerData : []),
  );

const makeSelectIsRequesting = () =>
  createSelector(
    selectScreenerDomain,
    screener => screener.isRequesting,
  );

// export default makeSelectScreener;
export {
  selectScreenerDomain,
  selectScreenerData,
  makeSelectIsRequesting,
  makeSelectScreener,
};
