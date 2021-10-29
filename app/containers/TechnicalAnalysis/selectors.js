import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the technicalAnalysis state domain
 */

const selectTechnicalAnalysisDomain = state =>
  state.technicalAnalysis || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TechnicalAnalysis
 */

//  List all the data 

const makeSelectTechnicalAnalysis = () =>
  createSelector(
    selectTechnicalAnalysisDomain,
    substate => substate,
  );



export default makeSelectTechnicalAnalysis;
export { selectTechnicalAnalysisDomain };
