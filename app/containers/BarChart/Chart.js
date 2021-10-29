
import React, { memo } from 'react';


import Highcharts from "highcharts";
// import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { conformsTo } from 'lodash';
import 'antd/dist/antd.css';
import { Spin } from 'antd';


// HighchartsHeatmap(Highcharts);

function Chart({data}) {
  

  let xAxis = data.map((item)=> item.org)
  let dataList = data.map((item)=> item.amount)


  const chartOptions = {
   chart: {
        type: 'column'
    },
    title: {
        text: '  ',
        visible: false
    },
    
    xAxis: {
      
        categories: xAxis,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Value'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        // {series.name}:
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Stock Symbol',
        data: dataList,

    }, ]

  };



  return (
    <> 
     <HighchartsReact highcharts={Highcharts} options={chartOptions} className="TopStock_BarChart" />
    </>
  );
}

export default memo(Chart);
