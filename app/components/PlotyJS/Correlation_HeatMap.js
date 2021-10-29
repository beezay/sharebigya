import React from 'react'
import Plot from 'react-plotly.js';

const Correlation_HeatMap = (props) => {
    let x = props.x;
    let totalxdata = props.x;
    let totalydata = props.y;
    let totalzdata = props.z;
    var data =  [
        {
          type: "heatmap",
        x: props.x,
          y:props.y,
        z: props.z  ,
        colorscale: "cividis",
        reversescale: true,
         
        }
      ]

var layout = {
    title:  "Correlation Matrix",
    width: 1000,
   height: 600,
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
   //  width: 500,
   //  height: 500,
    autosize: false
  }

  
     
    }
    for ( var i = 0; i < totalydata.length; i++ ) {
      for ( var j = 0; j < totalxdata.length; j++ ) {
        var currentValue = totalzdata[i][j];
        if (currentValue != 0.0) {
          var textColor = 'white';
        }else{
          var textColor = 'black';
        }
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: totalxdata[j],
          y: totalydata[i],
          text: totalzdata[i][j].toString().substring(0, 5),
          font: {
            family: 'Arial',
            size: 2,
            color: 'rgb(50, 171, 96)'
          },
          showarrow: false,
          font: {
            color: textColor
          }
        };
        layout.annotations.push(result);
      }
    }
  

    return (
        <>
           <Plot
        data={data}
        layout = {layout}
        
      />
        </>
    )
}

export default Correlation_HeatMap
