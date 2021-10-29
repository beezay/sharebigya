import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the correlationMatrix state domain
 */

const selectCorrelationMatrixDomain = state =>
  state.correlationMatrix || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CorrelationMatrix
 */

const makeSelectCorrelationMatrix = () =>
  createSelector(
    selectCorrelationMatrixDomain,
    substate => substate,
  );

export default makeSelectCorrelationMatrix;
export { selectCorrelationMatrixDomain };
