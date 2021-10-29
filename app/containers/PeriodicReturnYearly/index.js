/**
 *
 * PeriodicReturnYearly
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
import makeSelectPeriodicReturnYearly from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadPeriodicReturnYearlyData } from './actions';
import HeatMap from '../../components/PlotyJS/HeatMap';
import moment from 'moment';

export function PeriodicReturnYearly(props) {
  useInjectReducer({ key: 'periodicReturnYearly', reducer });
  useInjectSaga({ key: 'periodicReturnYearly', saga });
    const [xAxis,setXAxis] = useState([]);
  const [yAxis,setYAxis] = useState([]);
  const [zAxis,setZAxis] = useState([]);
  

  useEffect(()=>{
    props.loadPeriodicReturnYearlyData();
  },[])

  useEffect(()=>{
   let sub_index  = props.periodicReturnYearly.periodicReturnYearlyData.map((item)=> item.sub_index)
   setXAxis(sub_index)
    let length;
    let allDate;
   if(props.periodicReturnYearly.periodicReturnYearlyData[0]){
     allDate = Object.keys(props.periodicReturnYearly.periodicReturnYearlyData[0])
    allDate.shift();
    let changeDate = allDate.map((date)=> moment(parseInt(date)).format('MMM DD YYYY'))
    setYAxis(changeDate)
    length = allDate.length;
   
   }


    let count = 0;
    let mainarray = [];
   
    while(count < length){
         let array1st =[];
        props.periodicReturnYearly.periodicReturnYearlyData.map((item)=>{
          array1st.push(item[parseInt(allDate[count])])
        })
        count++
        mainarray.push(array1st)
        
    }
    setZAxis(mainarray)
  },[props.periodicReturnYearly])

  
  return (
    <>
     <HeatMap x={xAxis} y={yAxis} z={zAxis} title={"Periodic Return Yearly"}/>
    </>
  );
}

PeriodicReturnYearly.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  periodicReturnYearly: makeSelectPeriodicReturnYearly(),
});

function mapDispatchToProps(dispatch) {
  return {
      loadPeriodicReturnYearlyData:()  => dispatch(loadPeriodicReturnYearlyData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PeriodicReturnYearly);
