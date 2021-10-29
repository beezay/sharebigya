import React from 'react'
import Plot from 'react-plotly.js';

const Bar = (props) => {

 
   let base = props.x_neg.map((item)=> Math.abs(item))

var data = [
  {
    type: 'bar',
    x: props.y_neg,
    y: base,
    base: props.x_neg,
    hovertemplate: '%{base}',
    marker: {
      color: 'red'
    },
    name: 'pc_change Negative'
  },
  {
    type: 'bar',
    x: props.y_pos,
    y: props.x_pos,
    base: 0,
    marker: {
      color: 'blue'
    },
    name: 'pc_change Positive'
  }]
  var data1 = [
    {
      type: 'bar',
      x: props.index,
      y: props.volume,
      // base: props.x_neg,
      hovertemplate: '%{y}',
      marker: {
        color: 'green'
      },
      name: 'Daily Volume Return'
    }]
    var layout = {
  
      };
      var config = {responsive: true}
    return (
      <>
        <Plot
        data={data}
        layout={ layout }
      
      />
      <Plot
      data={data1}
      layout={ layout }
    
    />
    </>
    )
}

export default Bar
