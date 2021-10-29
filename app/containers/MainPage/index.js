/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect, useState, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  mainPageStatus,
  makeIndexDataSelector,
  makeSignalDataSelector,
  NepseIndexSelector,
  SensitiveIndexSelector,
  FloatIndexSelector,
} from './selectors';
import { loadIndexData, loadSignalData } from './actions';
import reducer from './reducer';
import saga from './saga';

import Charts from '../../components/Charts';
import Tables from '../../components/Table';
// import TreeMap from '../TreeMap/Loadable';

const TreeMap  = lazy(() => import('../TreeMap/Loadable'));

const Wrapper = styled.div`
  /* display: grid;
  /* grid-template-rows: minmax(100px, 1fr) 80vh; */
  font-size: 1 rem;
  line-height: 1.6rem;
  color: #8f8f8f; */
`;
const Chart = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;

    @media screen and (max-width: 768px){
    display: grid;
    justify-content: center;
    align-content: center;

    }
`;

const Signal = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  @media screen and (max-width: 768px){
    display: grid;
    justify-content: center;
    align-content: center;

    }
`;

const TreeMapWrapper = styled.div`
  
  @media screen and (max-width: 768px){
    /* display: grid;
    justify-content: center;
    align-content: center; */

    }
`;

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    props.loadIndexData();
    props.loadSignalData();
  }, []);

  useEffect(() => {
    setUpdated(!updated);
  }, [props.mainPageStatus]);

  return (
    <Wrapper>
      <Chart>
        <Charts props={props.NepseIndexData} updated={updated} />
        <Charts props={props.SensitiveIndexData} updated={updated} />
        <Charts props={props.FloatIndexData} updated={updated} />
      </Chart>
      <Signal>
        <Tables data={props.signalData.signal_df} colors= {'#006400'}/>
        <Tables data={props.signalData.signal_df_red}  colors= {'#FF0000'}/>

        <Suspense fallback={<></>}>
        <TreeMapWrapper>
        <TreeMap showOn={"dashboard"}/>
        </TreeMapWrapper>
        </Suspense>
      </Signal>

      
      
    </Wrapper>
  );
}

MainPage.propTypes = {
  NepseIndexData: PropTypes.array,
  SensitiveIndexData: PropTypes.array,
  FloatIndexData: PropTypes.array,
  loadIndexData: PropTypes.func,
  loadSignalData: PropTypes.func,
  mainPageStatus: PropTypes.bool,
  signalData: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  mainPageStatus: mainPageStatus(),
  indexData: makeIndexDataSelector(),
  signalData: makeSignalDataSelector(),
  NepseIndexData: NepseIndexSelector(),
  SensitiveIndexData: SensitiveIndexSelector(),
  FloatIndexData: FloatIndexSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadIndexData: () => dispatch(loadIndexData()),
    loadSignalData: () => dispatch(loadSignalData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
