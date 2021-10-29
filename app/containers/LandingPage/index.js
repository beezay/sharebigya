/**
 *
 * LandingPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import GlobalStyle from './globalStyles';
import Home from './pages';

import { loadSubscribe } from './actions';

export function LandingPage(props) {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });

  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  useEffect(() => {
    const jsonObect = JSON.stringify({
      email,
      phone_no: phoneNumber
    });
    props.loadSubscribe(jsonObect);
  }, [email, phoneNumber]);

  return (
    <div>
      <GlobalStyle />
      <Home setEmail={setEmail} setphoneNumber={setphoneNumber} />
    </div>
  );
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage()
});

function mapDispatchToProps(dispatch) {
  return {
    loadSubscribe: value => dispatch(loadSubscribe(value))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(LandingPage);
