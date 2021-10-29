/**
 *
 * BarChart
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBarChart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Chart from './Chart';
import { loadTopStocksData } from './actions'

export const Wrapper = styled.div`
  padding: 50px;
`;

export function BarChart(props) {
  useInjectReducer({ key: 'barChart', reducer });
  useInjectSaga({ key: 'barChart', saga });

  useEffect(() => {
    props.loadTopStocksData();
  }, []);


  return (
    <Wrapper>
      <Chart  data={props.barChart.topStocksData}/>
    </Wrapper>
  );
}

BarChart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  barChart: makeSelectBarChart(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTopStocksData: () => dispatch(loadTopStocksData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BarChart);
