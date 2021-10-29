/*
 *
 * AdvDec actions
 *
 */

import {
  // Advance Decline Data
  LOAD_ADVANCE_DECLINE_DATA,
  LOAD_ADVANCE_DECLINE_DATA_SUCCESS,
  LOAD_ADVANCE_DECLINE_DATA_ERROR,

  // Advance Decline 4 Data
  LOAD_ADVANCE_DECLINE_4_DATA,
  LOAD_ADVANCE_DECLINE_4_DATA_SUCCESS,
  LOAD_ADVANCE_DECLINE_4_DATA_ERROR,


} from './constants';


// Load Advance Decline Data
export function loadAdvanceDeclineData(advDecData) {
  return {
    type: LOAD_ADVANCE_DECLINE_DATA,
    advDecData,
  };
}

export function loadAdvanceDeclineDataSuccess(advDecData) {
  return {
    type: LOAD_ADVANCE_DECLINE_DATA_SUCCESS,
    advDecData,
  };
}
export function loadAdvanceDeclineDataError(error) {
  return {
    type: LOAD_ADVANCE_DECLINE_DATA_ERROR,
    error,
  };
}


// Load Advance Decline 4 Data
export function loadAdvanceDecline4Data(advDec4Data) {
  return {
    type: LOAD_ADVANCE_DECLINE_4_DATA,
    advDec4Data,
  };
}

export function loadAdvanceDeclineData4Success(advDec4Data) {
  return {
    type: LOAD_ADVANCE_DECLINE_4_DATA_SUCCESS,
    advDec4Data,
  };
}
export function loadAdvanceDeclineData4Error(error) {
  return {
    type: LOAD_ADVANCE_DECLINE_4_DATA_ERROR,
    error,
  };
}

