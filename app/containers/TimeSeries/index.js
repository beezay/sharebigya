/**
 *
 * TimeSeries
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadTimeSeriesData } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTimeSeries from './selectors';
import reducer from './reducer';
import saga from './saga';
import Selectdropdown from '../../components/Select';
import Chart from './Chart';

export function TimeSeries(props) {
  useInjectReducer({ key: 'timeSeries', reducer });
  useInjectSaga({ key: 'timeSeries', saga });

  const [symbolFields, setSymbolFields] = useState([]);
  const [selectedItem1, setselectedItem1] = useState(null);
  const [selectedItem2, setselectedItem2] = useState(null);
  const [selectedItem3, setselectedItem3] = useState(null);
  const [selectedItem4, setselectedItem4] = useState(null);
  const [selectedItem5, setselectedItem5] = useState(null);
  const [selectedItem6, setselectedItem6] = useState(null);
  
  const [item1, setitem1] = useState({});
  const [item2, setitem2] = useState([]);
  const [item3, setitem3] = useState([]);
  const [item4, setitem4] = useState([]);
  const [item5, setitem5] = useState([]);
  const [item6, setitem6] = useState([]);



  useEffect(() => {
    props.loadTimeSeriesData();
  }, []);

  useEffect(() => {
    let allSymbol = props.timeSeries.timeSeriesData.map(value => value.symbol);
    allSymbol = [...new Set(allSymbol)];
    setSymbolFields(allSymbol);
  }, [props]);

  useEffect(() => {

      //Selection 1

      const result1 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem1);
      const xData1 = result1.map(elem => Object.values(
        {
          date: Date.parse(elem.date),
          close: Number(elem.close)
        } 
      ));
    
      setitem1({data:xData1,name:selectedItem1});

      //Seclection 2
      const result2 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem2);
      const xData2 = result2.map(elem => Object.values(
        {
          date: Date.parse(elem.date),
          close: Number(elem.close)
        } 
      ));
    
      setitem2({data:xData2,name:selectedItem2});
      
      //Seclection 3
      const result3 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem3);
      const xData3 = result3.map(elem => Object.values(
        {
          date: Date.parse(elem.date),
          close: Number(elem.close)
        } 
      ));
    
      setitem3({data:xData3,name:selectedItem3});
       //Seclection 4
       const result4 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem4);
       
       const xData4 = result4.map(elem => Object.values(
         {
           date: Date.parse(elem.date),
           close: Number(elem.close)
         } 
       ));
     
       setitem4({data:xData4,name:selectedItem4});
 
       //Seclection 5
       const result5 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem5);
       const xData5 = result5.map(elem => Object.values(
         {
           date: Date.parse(elem.date),
           close: Number(elem.close)
         } 
       ));
     
       setitem5({data:xData5,name:selectedItem5});
         //Seclection 6
         const result6 = props.timeSeries.timeSeriesData.filter(value => value.symbol == selectedItem6);
         const xData6 = result6.map(elem => Object.values(
           {
             date: Date.parse(elem.date),
             close: Number(elem.close)
           } 
         ));
       
         setitem6({data:xData6,name:selectedItem6});
  
  }, [selectedItem1,selectedItem2,selectedItem3,selectedItem4,selectedItem5,selectedItem6]);


  return (
    <>
     <label >Select:</label>
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem1} selectedItem={selectedItem1} map= {"ACLBSL"} />
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem2} selectedItem={selectedItem2} map= {"ADBL"}/>
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem3} selectedItem={selectedItem3} map= {"AHPC"}/>
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem4} selectedItem={selectedItem4} map= {"AIL"}/>
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem5} selectedItem={selectedItem5} map= {"AKJCL"}/>
      <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem6} selectedItem={selectedItem6} map= {"AKPL"}/>
      <Chart data={item1} data2= {item2} data3= {item3} data4= {item4} data5= {item5} data6= {item6}/>
    </>
  );
}

TimeSeries.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  timeSeries: makeSelectTimeSeries(),
});

function mapDispatchToProps(dispatch) {
  return {
  loadTimeSeriesData: () => dispatch(loadTimeSeriesData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TimeSeries);
