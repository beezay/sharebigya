import { createSelector } from 'reselect';
import { initialState } from './reducer';



const selectTimeSeriesDomain = state => state.timeSeries || initialState;



const makeSelectTimeSeries = () =>
  createSelector(
    selectTimeSeriesDomain,
    substate => substate,
  );

export default makeSelectTimeSeries;
export { selectTimeSeriesDomain };
