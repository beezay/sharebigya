/*
 *
 * Screener reducer
 *
 */
import produce from 'immer';
import {
  LOAD_SCREENER_DATA,
  LOAD_SCREENER_DATA_SUCCESS,
  LOAD_SCREENER_DATA_ERROR,
} from './constants';

export const initialState = {
  screenerData: [],
  loadingScreener: false,
  errorScreener: false,
  isRequesting: false,
};

/* eslint-disable default-case, no-param-reassign */
const screenerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_SCREENER_DATA:
        return {
          ...state,
          loadingScreener: true,
          errorScreener: false,
          isRequesting: true,
        };
      case LOAD_SCREENER_DATA_SUCCESS:
        return {
          ...state,
          loadingScreener: false,
          errorScreener: false,
          isRequesting: false,
          screenerData: action.screenerData && action.screenerData.results,
        };
      case LOAD_SCREENER_DATA_ERROR:
        return {
          ...state,
          loadingScreener: false,
          isRequesting: false,
          errorScreener: action.error,
        };
      default:
        return state;
    }
  });

export default screenerReducer;
