/*
 *
 * LandingPage actions
 *
 */

import { LOAD_SUBSCRIBE,LOAD_SUBSCRIBE_SUCCESS,LOAD_SUBSCRIBE_ERROR } from './constants';


export function loadSubscribe(subscribeData) {
  return {
    type: LOAD_SUBSCRIBE,
    subscribeData,
  };
}

export function loadSubscribeSuccess(subscribeData) {
  return {
    type: LOAD_SUBSCRIBE_SUCCESS,
    subscribeData,
  };
}
export function loadSubscribeError(error) {
  return {
    type: LOAD_SUBSCRIBE_ERROR,
    error,
  };
}