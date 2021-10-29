import { GET_ORGS_REQUESTED } from './types';

export const getOrgs = orgs => {
  // console.log('actions', orgs);
  return {
    type: GET_ORGS_REQUESTED,
    payload: orgs
  };
};
