
import React, { memo } from 'react';


import Highcharts from "highcharts";
// import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { conformsTo } from 'lodash';
import 'antd/dist/antd.css';
import { Spin } from 'antd';


// HighchartsHeatmap(Highcharts);

function Chart(props) {

  const chartOptions = {
    chart: {
      type: 'line',
      height:600,
      events: {
      load() {
        const chart = this;        
          chart.showLoading('Loading Data...');
          setTimeout(function() {
          chart.hideLoading();
            }, 5000);
          },
    }
  },
  title: {
      text: 'Daily Close Price for stocks selected'
  },
xAxis: {
    type: "datetime",
    labels: {
      format: '{value:%Y-%m}',
      rotation: 45,
      align: 'left'
  }
  
  },
  yAxis: {
      title: {
          text: 'Value'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: false
          },
          enableMouseTracking: true
      }
  },
  series: [
  {
    name: props.data.name,
      data: props.data.data,
    },
    {
      name: props.data2.name,
    data: props.data2.data,
    },
    {
      name: props.data3.name,
    data: props.data3.data,
    },
    {
      name: props.data4.name,
    data: props.data4.data,
    },
    {
      name: props.data5.name,
    data: props.data5.data,
    },{
      name: props.data6.name,
    data: props.data6.data,
    },

]

  };



  return (
    <div> 
     <HighchartsReact highcharts={Highcharts} options={chartOptions}  />
    </div>
  );
}

export default memo(Chart);
