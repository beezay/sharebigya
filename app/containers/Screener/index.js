/**
 *
 * Screener
 *
 */
import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectScreener,
  makeSelectIsRequesting,
  selectScreenerData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadScreenData } from './actions';
import UserForm from './components/clientForm';
import SelectedTable from './components/table';
export function Screener({ loadScreenDatas, isRequesting, screenerFields }) {
  useInjectReducer({ key: 'screener', reducer });
  useInjectSaga({ key: 'screener', saga });

  const [sectorList, setsectorList] = useState([]);
  const [sectorSelected, setsectorSelected] = useState([]);
  const [fundaMentalSelected, setFundaMentalSelected] = useState([]);

  useEffect(() => {
    loadScreenDatas();
  }, []);
  useEffect(() => {
    if (screenerFields.length > 0) {
      const filterSector = screenerFields.map(x => x.group);
      setsectorList([...new Set(filterSector)]);
    }
  }, [screenerFields]);

  const handleCheckBox = value => {
    if (value === 'all') {
      // eslint-disable-next-line no-unused-expressions
      sectorSelected.length === sectorList.length
        ? setsectorSelected([])
        : setsectorSelected(sectorList);
    } else {
      // eslint-disable-next-line no-unused-expressions
      sectorSelected.includes(value)
        ? setsectorSelected(sectorSelected.filter(x => x !== value))
        : setsectorSelected([...sectorSelected, value]);
    }
  };
  return (
    <React.Fragment>
      <UserForm
        sectorList={sectorList}
        isRequesting={isRequesting}
        sectorSelected={sectorSelected}
        handleCheckBox={handleCheckBox}
      />
      {screenerFields.length > 0 && (
        <SelectedTable
          sectorList={sectorList}
          screenerFields={screenerFields}
          sectorSelected={sectorSelected}
        />
      )}
    </React.Fragment>
  );
}

Screener.propTypes = {
  isRequesting: PropTypes.bool,
  loadScreenDatas: PropTypes.func,
  screenerFields: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  screener: makeSelectScreener(),
  screenerFields: selectScreenerData(),
  isRequesting: makeSelectIsRequesting(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadScreenDatas: () => dispatch(loadScreenData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Screener);
