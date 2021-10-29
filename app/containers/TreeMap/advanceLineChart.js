import React, { memo } from 'react';
import Highcharts from 'highcharts';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';
import { Layout } from './css/advanceLineChartElements';
HighchartsTreemap(Highcharts);
function AdvDec4Chart(props) {
  let showXaxis = false;
  let newheight;

  if(typeof props.adv_ratio === 'object' || props.group == 'pro'){
    showXaxis = true;
    newheight = 120;
  }
  else{
    newheight = 80; 
  }

  const chartOptions = {
    chart: {
      type: 'bar',
      height: newheight,
      width: 400,
    },
    title: {
      // text: props.group,
      // visible: false,
      // text:  typeof props.adv_ratio === 'object' ? [ props.index[0] ]: [props.group],   
      text:  null,   
      align: 'center',
      margin: 0,
    },
    //   subtitle: {
    //     text: 'Estimated Time Remaining 10.5 hrs',
    //     verticalAlign: "bottom",
        /* y: 10 */
    //   },
      credits: false,
      legend: false,
      // tooltip: false,
      tooltip: {
        headerFormat: '<b>{point.name}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>'
    }, 
      plotOptions: {
        bar: {
          stacking: 'normal', 
          borderWidth: 0,
          borderRadius: 2,
          
        }
      },
      xAxis: {
        visible: true,
        lineWidth: 0,
        tickWidth: 0,
        labels: false,
        // min: 0,
        // max: 1,
        title: {
          text: typeof props.adv_ratio === 'object' ? [ props.index[0] ]: [props.group],   
          // align: 'high',
            // offset: 0,
            // text: 'Rainfall (mm)',
            rotation: -45,
            // y: -10,
            style: {
              color: '#333333',
              fontSize: '14px',
              fill: '#333333',
          }
        },
      },
      yAxis: {
      visible: showXaxis,
      text: null,
      min:0,
      max:1,
      lineWidth: 0,
        tickWidth: 0,
        gridLineColor: 'transparent'
      },
      series: [
          {
    name: "dec_ratio",
    // data: [1],
    data: typeof props.adv_ratio === 'object' ? [ props.dec_ratio[0] ]: [props.dec_ratio],
    color: "red",
    grouping: false
    // enableMouseTracking: false, disable tooltip on just this data element
  },
       {
        name: "adv_ratio",
         data: typeof props.adv_ratio === 'object' ? [ props.adv_ratio[0] ]: [props.adv_ratio],
        color: "green",
        grouping: false,
        //  groupPadding: -0.5,
         
      },
     
   
      ]
}


  return (
    <>

    {typeof props.adv_ratio === 'object' ? <HighchartsReact highcharts={Highcharts} options={chartOptions} /> : 
    <Layout> 
     <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Layout> }
   
    </>
  );
}

export default memo(AdvDec4Chart);
