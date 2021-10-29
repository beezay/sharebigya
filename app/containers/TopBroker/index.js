/**
 *
 * TopBroker
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTopBroker from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Chart from './Chart';

import { loadTopBrokersData } from './actions'

export function TopBroker(props) {
  useInjectReducer({ key: 'topBroker', reducer });
  useInjectSaga({ key: 'topBroker', saga });


  useEffect(() => {
    props.loadTopBrokersData();
  }, []);



  return (
    <>
    <Chart  data={props.topBroker}/>



    </>
  );
}

TopBroker.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  topBroker: makeSelectTopBroker(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTopBrokersData: () => dispatch(loadTopBrokersData()),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TopBroker);
