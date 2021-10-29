/**
 *
 * HeatMap
 *
 */

import React, { memo, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadHeatMapData } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHeatMap, { getSymbolsOnlyForYaxis, getAllHeatMapGroups } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Chart from './Chart';
import Selectdropdown from '../../components/Select';
import {Wrapper, Wrapper_DropDown} from './css/indexElements.js'

export function HeatMap(props) {
  useInjectReducer({ key: 'heatMap', reducer });
  useInjectSaga({ key: 'heatMap', saga });
  const [selectedItem, setselectedItem] = useState(null);
  const [filteredData, setfilteredData] = useState([]);  // Fitlered By Selected Organization
  const [filteredDataByDate, setfilteredDataByDate] = useState([]);  // Filtered By Selcted Date; Inital 10
   const [xaxis, setxaxis] = useState([]);
   const [yaxis, setyaxis] = useState([]);

  // Load Data From API
  useEffect(() => {
    props.loadHeatMapData();
  }, []);

 

  // Filter Data With Selected Group
  useEffect(() => {
    const filter = props.heatMap.heatMapData.filter((item => item.group == selectedItem ))

    setfilteredData(filter);
  },[selectedItem]);

  // Filter Data With Time => Last latest 10 number only
        // To Do: Arrange Data on decending data  
          useEffect(() => {
          let filteredDataByDesc = filteredData.sort((a,b)=>parseFloat(b.date) - parseFloat(a.date));
        
          const allDate = [...new Set(filteredDataByDesc.map( value => value.date))];
          // Get Top 10 Date only => Set selecction
          let topValues = allDate.slice(0,7);
          const filteredbydates = filteredDataByDesc.filter((item => topValues.includes(item.date) ));
          setfilteredDataByDate(filteredbydates);
      

          },[filteredData]);

  //Xaxis Data For Chart :- Extract Org name Only
  useEffect(() => {
    const filter = [...new Set(filteredDataByDate.map( value => value.date))];

    setxaxis(filter);
  },[filteredDataByDate]);

  //Yaxis Data For Chart :- Exact Date name Only
   useEffect(() => {   
    const filter = [...new Set(filteredDataByDate.map( value => value.org))];

    setyaxis(filter);
  },[filteredDataByDate]);

  return (
    <>
      <Wrapper>
      <Wrapper_DropDown>
      <Selectdropdown items= {props.getHeatMapGroup} setselectedItem={setselectedItem}  selectedItem={selectedItem} map= {"Com"} select={"heatmap"}/>
      </Wrapper_DropDown>
      <Chart
      data= {filteredDataByDate}
      xaxisData = {xaxis}
      yaxisData = {yaxis}
      />
      </Wrapper>
    </>
  );
}

HeatMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  heatMap: makeSelectHeatMap(),
  symbolForYAxis: getSymbolsOnlyForYaxis(),
  getHeatMapGroup: getAllHeatMapGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadHeatMapData: () => dispatch(loadHeatMapData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HeatMap);
