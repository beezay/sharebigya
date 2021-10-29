/**
 *
 * DailyVolReturn
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
import makeSelectDailyVolReturn from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadDailyVolReturnData } from './actions';
import Bar from '../../components/PlotyJS/Bar';


export function DailyVolReturn(props) {
  useInjectReducer({ key: 'dailyVolReturn', reducer });
  useInjectSaga({ key: 'dailyVolReturn', saga });

  const [xAxis_Positive, setXAxis_Positive] = useState([])
  const [YAxis_Positive, setYAxis_Positive] = useState([])
  const [xAxis_Negative, setXAxis_Negative] = useState([])
  const [YAxis_Negative, setYAxis_Negative] = useState([])
  const [YAxis_Base, setYAxis_Base] = useState([])

  const [volume, setVolume] = useState([])
  const [allName, setAllName] = useState([])
   useEffect(()=>{
    props.loadDailyVolReturnData();
  },[])

   useEffect(()=>{
  
     //Arrage data with respect to pc change in decending order

     const byDate = props.dailyVolReturn.dailyVolReturnData.slice(0);
byDate.sort(function(a,b) {
    return a.pc_change - b.pc_change;
});

let positive_pchange;
let positive_pcchange_name;

      positive_pchange = byDate.map((item)=> item.pc_change > 0 || item.pc_change == 0 ? item.pc_change : null)
      positive_pchange = positive_pchange.filter(Boolean);
      setXAxis_Positive(positive_pchange)
      positive_pcchange_name = byDate.map((item)=> item.pc_change > 0 || item.pc_change == 0  ? item.sub_index : null)
      positive_pcchange_name = positive_pcchange_name.filter(Boolean);
      setYAxis_Positive(positive_pcchange_name)


let negative_pchange;
let negative_pcchange_name;
      
            negative_pchange = byDate.map((item)=> item.pc_change < 0  ? item.pc_change : null)
            negative_pchange = negative_pchange.filter(Boolean);
            setXAxis_Negative(negative_pchange)
            negative_pcchange_name = byDate.map((item)=> item.pc_change < 0 ? item.sub_index : null)
            negative_pcchange_name = negative_pcchange_name.filter(Boolean);
            setYAxis_Negative(negative_pcchange_name)
           let  negative_pcchange_base = byDate.map((item)=> item.pc_change < 0 ? -item.sub_index : null)
           negative_pcchange_base = negative_pcchange_name.filter(Boolean);


           setYAxis_Base(negative_pcchange_base)



            let  allVolume = byDate.map((item)=> item.volume)
            setVolume(allVolume)

            let  allIndex = byDate.map((item)=> item.sub_index)
            setAllName(allIndex)
    

  },[props.dailyVolReturn])

  return (
    <>
     <Bar x_pos ={xAxis_Positive} y_pos = {YAxis_Positive} x_neg={xAxis_Negative} y_neg={YAxis_Negative} base={YAxis_Base}
     volume = {volume}
     index ={allName}
     />
    </>
  );
}

DailyVolReturn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dailyVolReturn: makeSelectDailyVolReturn(),
});

function mapDispatchToProps(dispatch) {
  return {
       loadDailyVolReturnData:()  => dispatch(loadDailyVolReturnData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DailyVolReturn);
