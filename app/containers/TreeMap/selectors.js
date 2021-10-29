import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the treeMap state domain
 */

const selectTreeMapDomain = state => state.treeMap || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TreeMap
 */

const makeSelectTreeMap = () =>
  createSelector(
    selectTreeMapDomain,
    substate => substate,
  );

export default makeSelectTreeMap;
export { selectTreeMapDomain };
