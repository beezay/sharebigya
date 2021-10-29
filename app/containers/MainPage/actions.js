/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_INDEX_DATA,
  LOAD_INDEX_DATA_SUCCESS,
  LOAD_INDEX_DATA_ERROR,
  LOAD_SIGNAL_DATA,
  LOAD_SIGNAL_DATA_SUCCESS,
  LOAD_SIGNAL_DATA_ERROR,
} from './constants';

export function loadIndexData(indexData) {
  return {
    type: LOAD_INDEX_DATA,
    indexData,
  };
}

export function loadIndexSuccess(indexData) {
  return {
    type: LOAD_INDEX_DATA_SUCCESS,
    indexData,
  };
}
export function loadIndexError(error) {
  return {
    type: LOAD_INDEX_DATA_ERROR,
    error,
  };
}

export function loadSignalData(signalData) {
  return {
    type: LOAD_SIGNAL_DATA,
    signalData,
  };
}

export function loadSignalSuccess(signalData) {
  return {
    type: LOAD_SIGNAL_DATA_SUCCESS,
    signalData,
  };
}

export function loadSignalError(error) {
  return {
    type: LOAD_SIGNAL_DATA_ERROR,
    error,
  };
}
