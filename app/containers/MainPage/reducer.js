/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_INDEX_DATA,
  LOAD_INDEX_DATA_SUCCESS,
  LOAD_INDEX_DATA_ERROR,
  LOAD_SIGNAL_DATA,
  LOAD_SIGNAL_DATA_SUCCESS,
  LOAD_SIGNAL_DATA_ERROR,
} from './constants';

export const initialState = {
  indexData: [],
  signalData: [],
  loadingIndex: false,
  loadingSignal: false,
  errorIndex: false,
  errorSignal: false,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_INDEX_DATA:
        return {
          ...state,
          loadingIndex: true,
          errorIndex: false,
        };
      case LOAD_INDEX_DATA_SUCCESS:
        return {
          ...state,
          loadingIndex: false,
          errorIndex: false,
          indexData: action.indexData,
        };
      case LOAD_INDEX_DATA_ERROR:
        return {
          ...state,
          loadingIndex: false,
          errorIndex: action.error,
        };
      case LOAD_SIGNAL_DATA:
        return {
          ...state,
          loadingSignal: true,
          errorSignal: false,
        };
      case LOAD_SIGNAL_DATA_SUCCESS:
        return {
          ...state,
          loadingSignal: false,
          errorSignal: false,
          signalData: action.signalData,
        };
      case LOAD_SIGNAL_DATA_ERROR:
        return {
          ...state,
          loadingSignal: false,
          errorSignal: action.error,
        };
      default:
        return state;
    }
  });

export default mainPageReducer;
