import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the topBroker state domain
 */

const selectTopBrokerDomain = state => state.topBroker || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TopBroker
 */

const makeSelectTopBroker = () =>
  createSelector(
    selectTopBrokerDomain,
    substate => substate,
  );

export default makeSelectTopBroker;
export { selectTopBrokerDomain };
