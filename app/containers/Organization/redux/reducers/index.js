import { combineReducers } from 'redux';
import { orgs } from './orgs';

export const rootReducer = combineReducers({
  orgs: orgs
});
