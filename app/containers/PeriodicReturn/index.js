/**
 *
 * PeriodicReturn
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
import makeSelectPeriodicReturn from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadPeriodicReturnData } from './actions';
import HeatMap from '../../components/PlotyJS/HeatMap';
import moment from 'moment';
import PeriodicReturnMonthly from '../PeriodicRetrunMonthly/Loadable'
import PeriodicReturnYearly from '../PeriodicReturnYearly/Loadable'
import PeriodicReturnWeekly from '../PeriodicReturnWeekly/Loadable'
import DailyVolReturn from '../DailyVolReturn/Loadable'
import CorrelationMatrix from '../CorrelationMatrix/Loadable'

export function PeriodicReturn(props) {
  useInjectReducer({ key: 'periodicReturn', reducer });
  useInjectSaga({ key: 'periodicReturn', saga });

  const [xAxis,setXAxis] = useState([]);
  const [yAxis,setYAxis] = useState([]);
  const [zAxis,setZAxis] = useState([]);

  

  useEffect(()=>{
    props.loadPeriodicReturnData();
  },[])

  useEffect(()=>{
   let sub_index  = props.periodicReturn.periodicReturnData.map((item)=> item.sub_index)
   setXAxis(sub_index)
    let length;
    let allDate;
   if(props.periodicReturn.periodicReturnData[0]){
     allDate = Object.keys(props.periodicReturn.periodicReturnData[0])
    allDate.shift();
    let changeDate = allDate.map((date)=> moment(parseInt(date)).format('MMM DD'))
    setYAxis(changeDate)
    length = allDate.length;
   
   }


    let count = 0;
    let mainarray = [];
   
    while(count < length){
         let array1st =[];
        props.periodicReturn.periodicReturnData.map((item)=>{
          array1st.push(item[parseInt(allDate[count])])
        })
        count++
        mainarray.push(array1st)
        
    }
    setZAxis(mainarray)
  },[props.periodicReturn])

  return (
    <>
      <HeatMap x={xAxis} y={yAxis} z={zAxis} title={"Periodic Return Daily"}/>
        <PeriodicReturnWeekly />
      <PeriodicReturnMonthly />
      <PeriodicReturnYearly />
      <DailyVolReturn />

      <CorrelationMatrix />

      
    </>
  );
}

PeriodicReturn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  periodicReturn: makeSelectPeriodicReturn(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPeriodicReturnData:()  => dispatch(loadPeriodicReturnData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PeriodicReturn);
