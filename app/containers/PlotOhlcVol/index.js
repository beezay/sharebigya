/**
 *
 * PlotOhlcVol
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
import makeSelectPlotOhlcVol from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadOhlcVolData } from './actions';
import Plot from 'react-plotly.js';
import moment from 'moment/moment.js'

export function PlotOhlcVol(props) {
  useInjectReducer({ key: 'plotOhlcVol', reducer });
  useInjectSaga({ key: 'plotOhlcVol', saga });

  useEffect(()=>{
    props.loadOhlcVolData();
  },[])

  var trace1={}
  var x = []
  var x_num = []
  var close = []
  var open = []
  var high = []
  var low = []
  var volume = []
  var pc_change = []
  var color = []

props.plotOhlcVol.ohlcVolData.map((item) => {
  // x.push(item.date)
  // x.push(moment(item.date, "x").format("DD MMM YYYY hh:mm a"))
  x.push(moment(item.date, "x").format("DD MMM YYYY "))
  x_num.push(item.date)
  close.push(item.close)
  open.push(item.open)
  high.push(item.high)
  low.push(item.low)
  volume.push(item.volume)
  pc_change.push(item.pc_change)
})

pc_change.map((item)=>{item > 0 ? color.push("green") : color.push("red")});

var trace1 = {
   "x": x,
  "close": close,
  "high": high,
  "low": low,
  "open": open,
  // cutomise colors
  increasing: {line: {color: 'green'}},
  decreasing: {line: {color: 'red'}},
  

  type: 'ohlc',
  xaxis: 'x',
  yaxis: 'y'
};

var trace3 = {
  type: 'bar',
  x: x,  
  y: volume,
  xaxis: 'x2',
  yaxis: 'y2',
  marker: {
    color: color,
    
}
};


var data = [trace1, trace3  ];

var layout = {
  grid: {rows: 2, columns: 1, pattern: 'independent'},
  // width:1000,
  height:600,
  title: 'OHLC / Volume',
  dragmode: 'zoom',
   showlegend: false,
   xaxis: {
     autorange: true,
     title: 'Date',
     visible: false,
      rangeslider: {
      visible: false
    },
     font:{
       size: 1
     }
   },
 
   yaxis: {
     autorange: true,
   }
};

var config = {responsive: true}
  return (
    <>
     <Plot
        data={data}
        layout={ layout }
        config = {config}
      />
     
    </>
  );
}

PlotOhlcVol.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  plotOhlcVol: makeSelectPlotOhlcVol(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadOhlcVolData:()  => dispatch(loadOhlcVolData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PlotOhlcVol);
