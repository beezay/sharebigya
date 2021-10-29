/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer';

import { LOAD_SUBSCRIBE,
LOAD_SUBSCRIBE_SUCCESS,
LOAD_SUBSCRIBE_ERROR,
} from './constants';

export const initialState = {
  subscribeResult:'',
  loadingSubscribe: false,
  errorSubscribe: false,

};

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>

  produce(state, (/* draft */) => {
     switch (action.type) {
      case LOAD_SUBSCRIBE:
        return {
          ...state,
          loadingSubscribe: true,
          errorSubscribe: false,
        };
      case LOAD_SUBSCRIBE_SUCCESS:
        return {
          ...state,
          loadingSubscribe: false,
          errorSubscribe: false,
          subscribeResult: action,
        };
      case LOAD_SUBSCRIBE_ERROR:
        return {
          ...state,
          loadingSubscribe: false,
          errorSubscribe: action.error,
        };
      default:
        return state;
    }
  });

export default landingPageReducer;
