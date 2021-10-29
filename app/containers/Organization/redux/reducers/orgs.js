import {
  GET_ORGS_FAILED,
  GET_ORGS_REQUESTED,
  GET_ORGS_SUCCESS
} from '../types';

const initialState = {
  orgs: [],
  loading: false,
  errors: null
};

export const orgs = (state = initialState, action) => {
  console.log('Reducer', action);
  switch (action.type) {
    case GET_ORGS_REQUESTED:
      console.log('requested');
      return {
        ...state,
        loading: true
      };
    case GET_ORGS_SUCCESS:
      console.log('success');

      return {
        ...state,
        loading: false,
        orgs: action.payload
      };
    case GET_ORGS_FAILED:
      console.log('failed');

      return {
        ...state,
        loading: false,
        errors: action.message
      };
    default:
      return state;
  }
};
