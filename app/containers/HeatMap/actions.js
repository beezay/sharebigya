/*
 *
 * HeatMap actions
 *
 */

import {
  LOAD_HEATMAP_DATA,
  LOAD_HEATMAP_DATA_SUCCESS,
  LOAD_HEATMAP_DATA_ERROR,
} from './constants';

export function loadHeatMapData(heatMapData) {
  return {
    type: LOAD_HEATMAP_DATA,
    heatMapData,
  };
}

export function loadHeatMapDataSuccess(heatMapData) {
  return {
    type: LOAD_HEATMAP_DATA_SUCCESS,
    heatMapData,
  };
}
export function loadHeatMapDataError(error) {
  return {
    type: LOAD_HEATMAP_DATA_ERROR,
    error,
  };
}
