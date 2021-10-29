/**
 *
 * PeriodicRetrunMonthly
 *
 */

import React, { memo,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPeriodicRetrunMonthly from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadPeriodicReturnMonthlyData } from './actions';
import moment from 'moment';
import HeatMap from '../../components/PlotyJS/HeatMap';

export function PeriodicRetrunMonthly(props) {
  useInjectReducer({ key: 'periodicRetrunMonthly', reducer });
  useInjectSaga({ key: 'periodicRetrunMonthly', saga });

  const [xAxis,setXAxis] = useState([]);
  const [yAxis,setYAxis] = useState([]);
  const [zAxis,setZAxis] = useState([]);

useEffect(()=>{
  
    props.loadPeriodicReturnMonthlyData();
  },[])

    useEffect(()=>{
   let sub_index  = props.periodicRetrunMonthly.periodicReturnMonthlyData.map((item)=> item.sub_index)
   setXAxis(sub_index)
    let length;
    let allDate;
   if(props.periodicRetrunMonthly.periodicReturnMonthlyData[0]){
     allDate = Object.keys(props.periodicRetrunMonthly.periodicReturnMonthlyData[0])
    allDate.shift();
    let changeDate = allDate.map((date)=> moment(parseInt(date)).format('MMM DD'))
    setYAxis(changeDate)
    length = allDate.length;
   
   }


    let count = 0;
    let mainarray = [];
   
    while(count < length){
         let array1st =[];
        props.periodicRetrunMonthly.periodicReturnMonthlyData.map((item)=>{
          array1st.push(item[parseInt(allDate[count])])
        })
        count++
        mainarray.push(array1st)
        
    }
    setZAxis(mainarray)
  },[props.periodicRetrunMonthly])
  return (
    <>
     <HeatMap x={xAxis} y={yAxis} z={zAxis} title={"Periodic Return Monthly"}/>
    </>
  );
}

PeriodicRetrunMonthly.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  periodicRetrunMonthly: makeSelectPeriodicRetrunMonthly(),
});

function mapDispatchToProps(dispatch) {
  return {
      loadPeriodicReturnMonthlyData:()  => dispatch(loadPeriodicReturnMonthlyData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PeriodicRetrunMonthly);
