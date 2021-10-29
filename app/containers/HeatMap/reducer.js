/*
 *
 * HeatMap reducer
 *
 */
import produce from 'immer';
import {
  LOAD_HEATMAP_DATA,
  LOAD_HEATMAP_DATA_SUCCESS,
  LOAD_HEATMAP_DATA_ERROR,
} from './constants';

export const initialState = {
  heatMapData: [],
  loadingheatMap: false,
  errorheatMap: false,
};

/* eslint-disable default-case, no-param-reassign */
const heatMapReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_HEATMAP_DATA:
        return {
          ...state,
          loadingheatMap: true,
          errorheatMap: false,
        };
      case LOAD_HEATMAP_DATA_SUCCESS:
        return {
          ...state,
          loadingheatMap: false,
          errorheatMap: false,
          heatMapData: action.heatMapData,
        };
      case LOAD_HEATMAP_DATA_ERROR:
        return {
          ...state,
          loadingheatMap: false,
          errorheatMap: action.error,
        };
      default:
        return state;
    }
  });

export default heatMapReducer;
