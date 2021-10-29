import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the heatMap state domain
 */

const selectHeatMapDomain = state => state.heatMap || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HeatMap
 */

const makeSelectHeatMap = () =>
  createSelector(
    selectHeatMapDomain,
    substate => substate,
  );

  const getSymbolsOnlyForYaxis = () =>
  createSelector(
    selectHeatMapDomain,
    // heatMap => heatMap.heatMapData.map( value => value.org),
    heatMap => [...new Set(heatMap.heatMapData.map( value => value.org))],
    
  );
  const getAllHeatMapGroups = () =>
  createSelector(
    selectHeatMapDomain,
    // heatMap => heatMap.heatMapData.map( value => value.org),
    heatMap => [...new Set(heatMap.heatMapData.map( value => value.group))],
    
  );

export default makeSelectHeatMap;
export { selectHeatMapDomain, getSymbolsOnlyForYaxis, getAllHeatMapGroups };
