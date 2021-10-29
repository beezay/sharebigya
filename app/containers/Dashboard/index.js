/**
 *
 * Dashboard
 *
 */

import React, { memo, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import UserRoute from './routes';
// import Sidebar from '../../components/Sidebar';

const Sidebar  = lazy(() => import('../../components/Sidebar'));

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return (
    <>
     <Suspense fallback={<></>}>
      <Sidebar />
      </Suspense>
      <UserRoute />
    </>
  );
}

Dashboard.propTypes = {};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Dashboard);
