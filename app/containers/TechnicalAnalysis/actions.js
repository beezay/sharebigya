/*
 *
 * TechnicalAnalysis actions
 *
 */

import {
  LOAD_TECH_ANALY_DATA,
  LOAD_TECH_ANALY_DATA_SUCCESS,
  LOAD_TECH_ANALY_DATA_ERROR,
} from './constants';

export function loadTechAnalyData(techAnalyData) {
  return {
    type: LOAD_TECH_ANALY_DATA,
    techAnalyData,
  };
}

export function loadTechAnalySuccess(techAnalyData) {
  return {
    type: LOAD_TECH_ANALY_DATA_SUCCESS,
    techAnalyData,
  };
}

export function loadTechAnalyError(error) {
  return {
    type: LOAD_TECH_ANALY_DATA_ERROR,
    error,
  };
}
