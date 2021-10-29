/**
 *
 * AdvDec
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
import makeSelectAdvDec from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadAdvanceDeclineData, loadAdvanceDecline4Data } from './actions';
import {Wrapper,Layout, AdvLayout, AdvSubLayout,AdvCharts,LayoutTreeChart} from './css/indexElemennts';
import AdvDecChart from './advanceLineChart';
import AdvDec4Chart from './advDec4Chart';
import { AdvDecDataNepse } from './indicationData';
import { Indicator } from './indicator';


export function AdvDec(props) {
  useInjectReducer({ key: 'advDec', reducer });
  useInjectSaga({ key: 'advDec', saga });
  

  
  useEffect(() => {
    props.loadAdvDecData();
    props.loadAdvDec4Data();
  }, []);

  return (
    <>
    <Wrapper>
     <h2>  Ratio of gainers and losers -Sectorwise </h2>
      <Layout>
      <AdvLayout>
      <h3>AdvDecData</h3>
      <AdvSubLayout>
      <Indicator type={"advdec"} />
      <AdvCharts>
      {props.advDec.advDecData.adv_dec_nep_pc ?   <AdvDecChart {...props.advDec.advDecData.adv_dec_nep_pc} /> : null}     
      {props.advDec.advDecData.adv_dec1 ?  props.advDec.advDecData.adv_dec1.map( item =>  <AdvDecChart {...item} />) : null}
      </AdvCharts>
      </AdvSubLayout>
      </AdvLayout>

      <AdvLayout>
      <h2>AdvDec4Data</h2>
      <AdvSubLayout>
      <Indicator type={"advdec4"} />
      <AdvCharts>
      {props.advDec.advDec4Data.adv_dec1 ?   <AdvDec4Chart {...props.advDec.advDec4Data.adv_dec_nepse_4} /> : null}
      {props.advDec.advDec4Data.adv_dec1 ?  props.advDec.advDec4Data.adv_dec1.map( item =>  <AdvDec4Chart {...item} />) : null}
      </AdvCharts>
      
      </AdvSubLayout>
      </AdvLayout>
      </Layout> 

      </Wrapper>
   
    </>
  );
}

AdvDec.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  advDec: makeSelectAdvDec(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAdvDecData: () => dispatch(loadAdvanceDeclineData()),
    loadAdvDec4Data: () => dispatch(loadAdvanceDecline4Data()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AdvDec);
