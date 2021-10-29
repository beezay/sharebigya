import React from 'react'
import Plot from 'react-plotly.js';

const TwoSideBar = (props) => {
    var data = [
  {
    type: 'bar',
    x: props.bar2X,
    y: props.bar2Y,
    base: props.bar2Base,
    hovertemplate: '%{base}',
    marker: {
      color: 'red'
    },
    name: 'Loss'
  },
  {
    type: 'bar',
    x: props.bar1X,
    y: props.bar1Y,
    base: 0,
    marker: {
      color: 'blue'
    },
    name: 'Gain'
  }]
 

  var config = {responsive: true}
    return (
         <Plot
        data={data}
        config = {config}
      />
    )
}

export default TwoSideBar
