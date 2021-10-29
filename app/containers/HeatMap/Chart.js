
import React, { memo } from 'react';


import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';
// import { severityHexColors, getColor, rgbObjectToHex } from "./heatmapUtils";


HighchartsHeatmap(Highcharts);

function getPointCategoryName(point, dimension) {
  var series = point.series,
      isY = dimension === 'y',
      axis = series[isY ? 'yAxis' : 'xAxis'];
  return axis.categories[point[isY ? 'y' : 'x']];
}
function Chart(props) {

  console.log(">>>>Heatmap inside heatmap", props)

  function getXaxisData3(value) {
  return parseInt(Object.keys(props.xaxisData).find(key => props.xaxisData[key] === value));
  }
  function getyaxisData(value) {
    return parseInt(Object.keys( props.yaxisData).find(key =>  props.yaxisData[key] === value));
  }
  
 let newDate = props.xaxisData.map((date)=> moment(date).format('MMM DD, YYYY'))

 let newData = props.data.map((item)=> [getXaxisData3(item.date),getyaxisData(item.org),item.diff_pct] )
    

  const chartOptions = {
   chart: {
    type: 'heatmap',
    marginTop: 80,
    marginBottom: 80,
    plotBorderWidth: 1,
    height:900,
    width: 700,
    events: {
      load() {
        const chart = this;        
          chart.showLoading('Loading Data...');
          setTimeout(function() {
          chart.hideLoading();
            }, 2000);
          },
    }
  },


  title: {
    text: '% Change for all stocks in selected sector for 7 days',
    
  },

  xAxis: {
    // categories: props.xaxisData,
    categories: newDate,
    opposite: true, 
    //  labels: {
    //     style: {
    //         fontSize: '5px'
    //     }
    // }
  },

  yAxis: {
    categories: props.yaxisData,
    title: null,
    reversed: true
  },

  accessibility: {
    // point: {
    //   descriptionFormatter: function (point) {
    //     var ix = point.index + 1,
    //       xName = getPointCategoryName(point, 'x'),
    //       yName = getPointCategoryName(point, 'y'),
    //       val = point.value;
    //     return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
    //   }
    // }
  },

  // colorAxis: {
  //   // min: -5,
  //   minColor: '#F63538',
  //   // maxColor: Highcharts.getOptions().colors[0]
  //   maxColor: '#26A248',
  // },
  colorAxis: {
    // min: 0,
    
    minColor: '#FFFFFF',
    maxColor: Highcharts.getOptions().colors[0]
},

  // legend: {
  //   align: 'right',
  //   layout: 'vertical',
  //   margin: 0,
  //   verticalAlign: 'top',
  //   y: 25,
  //   symbolHeight: 280
  // },

  tooltip: {
    formatter: function () {
      return '<b>' + getPointCategoryName(this.point, 'x') + '</b> Date <br><b>' +
        this.point.value + '</b> Value <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
    }
  },

  series: [{
    name: 'Data',
    borderWidth: 1,
     data: newData,
    dataLabels: {
      enabled: true,
      color: '#000000'
    }
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        yAxis: {
          labels: {
            formatter: function () {
              return this.value.charAt(0);
            }
          }
        }
      }
    }]
  }

  }
    


  return (
    
     <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    
  );
}

export default memo(Chart);
