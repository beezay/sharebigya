/*
 *
 * TreeMap reducer
 *
 */
import produce from 'immer';
import {
  // Advance Decline Data
  LOAD_ADVANCE_DECLINE_DATA,
  LOAD_ADVANCE_DECLINE_DATA_SUCCESS,
  LOAD_ADVANCE_DECLINE_DATA_ERROR,

  // Advance Decline 4 Data
  LOAD_ADVANCE_DECLINE_4_DATA,
  LOAD_ADVANCE_DECLINE_4_DATA_SUCCESS,
  LOAD_ADVANCE_DECLINE_4_DATA_ERROR,

  // TreeMap Data
  LOAD_TREEMAP_DATA,
  LOAD_TREEMAP_DATA_SUCCESS,
  LOAD_TREEMAP_DATA_ERROR,
} from './constants';

export const initialState = {
  //  Advance Decline Data
  advDecData: {},
  loadingAdvDec: false,
  errorAdvDec: false,
  //  Advance Decline Data 4
  advDec4Data: {},
  loadingAdvDec4: false,
  errorAdvDec4: false,
  // Tree Map Data
  treeMapData: [],
  loadingtreeMap: false,
  errortreeMap: false,
};

/* eslint-disable default-case, no-param-reassign */
const treeMapReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      // Adv Dec Data
      case LOAD_ADVANCE_DECLINE_DATA:
        return {
          ...state,
          loadingAdvDec: true,
          errorAdvDec: false,
        };
      case LOAD_ADVANCE_DECLINE_DATA_SUCCESS:
        return {
          ...state,
          loadingAdvDec: false,
          errorAdvDec: false,
          advDecData: action.advDecData,
        };
      case LOAD_ADVANCE_DECLINE_DATA_ERROR:
        return {
          ...state,
          loadingAdvDec: false,
          errorAdvDec: action.error,
        };
       // Adv Dec 4 Data
      case LOAD_ADVANCE_DECLINE_4_DATA:
        return {
          ...state,
          loadingAdvDec4: true,
          errorAdvDec4: false,
        };
      case LOAD_ADVANCE_DECLINE_4_DATA_SUCCESS:
        return {
          ...state,
          loadingAdvDec4: false,
          errorAdvDec4: false,
          advDec4Data: action.advDec4Data,
        };
      case LOAD_ADVANCE_DECLINE_4_DATA_ERROR:
        return {
          ...state,
          loadingAdvDec4: false,
          errorAdvDec4: action.error,
        };
      // Tree Map Data
      case LOAD_TREEMAP_DATA:
        return {
          ...state,
          loadingtreeMap: true,
          errortreeMap: false,
        };
      case LOAD_TREEMAP_DATA_SUCCESS:
        return {
          ...state,
          loadingtreeMap: false,
          errortreeMap: false,
          treeMapData: action.treeMapData,
        };
      case LOAD_TREEMAP_DATA_ERROR:
        return {
          ...state,
          loadingtreeMap: false,
          errortreeMap: action.error,
        };
      default:
        return state;
    }
  });

export default treeMapReducer;
