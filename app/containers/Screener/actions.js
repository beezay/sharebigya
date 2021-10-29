/*
 *
 * Screener actions
 *
 */

import {
  LOAD_SCREENER_DATA,
  LOAD_SCREENER_DATA_SUCCESS,
  LOAD_SCREENER_DATA_ERROR,
} from './constants';

export function loadScreenData(screenerData) {
  return {
    type: LOAD_SCREENER_DATA,
    screenerData,
  };
}

export function loadScreenSuccess(screenerData) {
  return {
    type: LOAD_SCREENER_DATA_SUCCESS,
    screenerData,
  };
}

export function loadScreenError(error) {
  return {
    type: LOAD_SCREENER_DATA_ERROR,
    error,
  };
}
