/**
 *
 * PeriodicReturnBar
 *
 */

import React, { memo,useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPeriodicReturnBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadPeriodicReturnBarData } from './actions';
import TwoSideBar from './chart';

export function PeriodicReturnBar({loadPeriodicReturnBarData,periodicReturnBar}) {

  useInjectReducer({ key: 'periodicReturnBar', reducer });
  useInjectSaga({ key: 'periodicReturnBar', saga });
    const [sector, setSector] = useState([]);
    const [positiveX, setPositiveX] = useState([]);
    const [positiveY, setPositiveY] = useState([]);
    const [negativeX, setNegativeX] = useState([]);
    const [negativeY, setNegativeY] = useState([]); 
    const [negativeBase, setNegativeBase] = useState([]);

   useEffect(()=>{
    loadPeriodicReturnBarData();
  },[])


 useEffect(()=>{
   let sectors = []
    let positive_X = [];
    let positive_Y = [];
    let negative_X = [];
    let negative_Y = [];
    let negative_base = [];
   let data = []
    periodicReturnBar.periodicReturnBarData.map((item)=> sectors.push(item.sector));
    setSector(sectors)



    periodicReturnBar.periodicReturnBarData.map((item)=> item.period_ret > 0 ? 
    positive_X.push(item.sector)
    : 
    negative_X.push(item.sector)
     );

     setPositiveX(positive_X)
     setNegativeX(negative_X)

     

      periodicReturnBar.periodicReturnBarData.map((item)=> item.period_ret > 0 ? 
    positive_Y.push(item.period_ret)
    : 
    negative_Y.push(item.period_ret)
     );
     setPositiveY(positive_Y)
     setNegativeY(negative_Y)
  periodicReturnBar.periodicReturnBarData.map((item)=> item.period_ret > 0 ? 
    null
    : 
    negative_base.push(-(item.period_ret))
     );
     setNegativeBase(negativeBase)
  },[periodicReturnBar])

  return (
    <>
      <TwoSideBar
      bar1X= {positiveX}
      bar1Y={positiveY}
      bar2X={negativeX}
      bar2Y={negativeY}
      bar2Base={negativeBase}

      
       />
       {/* <PeriodicRetrunMonthly /> */}
    </>
  );
}

PeriodicReturnBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  periodicReturnBar: makeSelectPeriodicReturnBar(),
});

function mapDispatchToProps(dispatch) {
  return {
   loadPeriodicReturnBarData:()  => dispatch(loadPeriodicReturnBarData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PeriodicReturnBar);
