import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMainPageDomain = state => state.mainPage || initialState;

const mainPageStatus = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.loadingIndex,
  );

const makeIndexDataSelector = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.indexData,
  );

const NepseIndexSelector = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.indexData.filter(e => e.sub_index === 'NEPI'),
  );

const SensitiveIndexSelector = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.indexData.filter(e => e.sub_index === 'SENI'),
  );

const FloatIndexSelector = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.indexData.filter(e => e.sub_index === 'FLOI'),
  );

const makeSignalDataSelector = () =>
  createSelector(
    selectMainPageDomain,
    mainPage => mainPage.signalData,
  );

export {
  selectMainPageDomain,
  makeIndexDataSelector,
  makeSignalDataSelector,
  NepseIndexSelector,
  SensitiveIndexSelector,
  FloatIndexSelector,
  mainPageStatus,
};
