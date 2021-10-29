/*
 *
 * TechnicalAnalysis reducer
 *
 */
import produce from 'immer';
import {
  LOAD_TECH_ANALY_DATA,
  LOAD_TECH_ANALY_DATA_SUCCESS,
  LOAD_TECH_ANALY_DATA_ERROR,
} from './constants';

export const initialState = {
  techAnalyData: [],
  loadingtechAnalyData: false,
  errorTechAnaly: false,
};

/* eslint-disable default-case, no-param-reassign */
const technicalAnalysisReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_TECH_ANALY_DATA:
        return {
          ...state,
          loadingtechAnalyData: true,
          errorTechAnaly: false,
        };
      case LOAD_TECH_ANALY_DATA_SUCCESS:
        return {
          ...state,
          loadingtechAnalyData: false,
          errorIndex: false,
          techAnalyData: action.techAnalyData,
        };
      case LOAD_TECH_ANALY_DATA_ERROR:
        return {
          ...state,
          loadingtechAnalyData: false,
          errorIndex: action.error,
        };
    }
  });

export default technicalAnalysisReducer;
