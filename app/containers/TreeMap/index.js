/**
 *
 * TreeMap
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
import makeSelectTreeMap from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Wrapper,Layout, AdvLayout, AdvSubLayout,AdvCharts,LayoutTreeChart} from './css/indexElemennts';
import { loadTreeMapData, loadAdvanceDeclineData, loadAdvanceDecline4Data, } from './actions';
import TreeChart from './treeChart';
import TreeMapPlotly from './Chart/TreeMap';
// import AdvDecChart from './advanceLineChart';
// import AdvDec4Chart from './advDec4Chart';
// import { AdvDecDataNepse } from './indicationData';
// import { Indicator } from './indicator';

export function TreeMap(props) {
  useInjectReducer({ key: 'treeMap', reducer });
  useInjectSaga({ key: 'treeMap', saga });
  

  useEffect(() => {
    props.loadAdvDecData();
    props.loadAdvDec4Data();
    props.loadTreeMapData();
  }, []);
  
  return (
    <>
    <Wrapper>
      <LayoutTreeChart> 
        {/* <TreeChart
        {...props.treeMap}
        showOn = {props.showOn == "dashboard" ? "dashboard" : null} /> */}

        <TreeMapPlotly 
         {...props.treeMap}
        showOn = {props.showOn == "dashboard" ? "dashboard" : null}
        />
      </LayoutTreeChart>
 

     {/* {props.showOn == "dashboard" ? null : 
      <Layout>
      <AdvLayout>
      <h2>AdvDecData</h2>
      <AdvSubLayout>
      <Indicator type={"advdec"} />
      <AdvCharts>
      {props.treeMap.advDecData.adv_dec_nep_pc ?   <AdvDecChart {...props.treeMap.advDecData.adv_dec_nep_pc} /> : null}     
      {props.treeMap.advDecData.adv_dec1 ?  props.treeMap.advDecData.adv_dec1.map( item =>  <AdvDecChart {...item} />) : null}
      </AdvCharts>
      </AdvSubLayout>
      </AdvLayout>

      <AdvLayout>
      <h2>AdvDec4Data</h2>
      <AdvSubLayout>
      <Indicator type={"advdec4"} />
      <AdvCharts>
      {props.treeMap.advDec4Data.adv_dec1 ?   <AdvDec4Chart {...props.treeMap.advDec4Data.adv_dec_nepse_4} /> : null}
      {props.treeMap.advDec4Data.adv_dec1 ?  props.treeMap.advDec4Data.adv_dec1.map( item =>  <AdvDec4Chart {...item} />) : null}
      </AdvCharts>
      
      </AdvSubLayout>
      </AdvLayout>
      </Layout> } */}

      </Wrapper>
   
    </>
  );
}

TreeMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  treeMap: makeSelectTreeMap(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAdvDecData: () => dispatch(loadAdvanceDeclineData()),
    loadAdvDec4Data: () => dispatch(loadAdvanceDecline4Data()),
    loadTreeMapData: () => dispatch(loadTreeMapData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TreeMap);
