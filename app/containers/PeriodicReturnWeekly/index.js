/**
 *
 * PeriodicReturnWeekly
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
import makeSelectPeriodicReturnWeekly from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadPeriodicReturnWeeklyData } from './actions';
import HeatMap from '../../components/PlotyJS/HeatMap';
import moment from 'moment';

export function PeriodicReturnWeekly(props) {
  useInjectReducer({ key: 'periodicReturnWeekly', reducer });
  useInjectSaga({ key: 'periodicReturnWeekly', saga });

    const [xAxis,setXAxis] = useState([]);
  const [yAxis,setYAxis] = useState([]);
  const [zAxis,setZAxis] = useState([]);

    useEffect(()=>{
    props.loadPeriodicReturnWeeklyData();
  },[])

  useEffect(()=>{
   let sub_index  = props.periodicReturnWeekly.periodicReturnWeeklyData.map((item)=> item.sub_index)
   setXAxis(sub_index)
    let length;
    let allDate;
   if(props.periodicReturnWeekly.periodicReturnWeeklyData[0]){
     allDate = Object.keys(props.periodicReturnWeekly.periodicReturnWeeklyData[0])
    allDate.shift();
    let changeDate = allDate.map((date)=> moment(parseInt(date)).format('MMM DD'))
    setYAxis(changeDate)
    length = allDate.length;
   
   }


    let count = 0;
    let mainarray = [];
   
    while(count < length){
         let array1st =[];
        props.periodicReturnWeekly.periodicReturnWeeklyData.map((item)=>{
          array1st.push(item[parseInt(allDate[count])])
        })
        count++
        mainarray.push(array1st)
        
    }
    setZAxis(mainarray)
  },[props.periodicReturnWeekly])

  return (
    <>
      <HeatMap x={xAxis} y={yAxis} z={zAxis} title={"Periodic Return Weekly"}/>
    </>
  );
}

PeriodicReturnWeekly.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  periodicReturnWeekly: makeSelectPeriodicReturnWeekly(),
});

function mapDispatchToProps(dispatch) {
  return {
     loadPeriodicReturnWeeklyData:()  => dispatch(loadPeriodicReturnWeeklyData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PeriodicReturnWeekly);
