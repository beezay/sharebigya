import React, { memo } from 'react';
import Highcharts from 'highcharts';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';
import { Layout } from './css/advanceLineChartElements';
HighchartsTreemap(Highcharts);
function AdvDec4Chart(props) {
  let showXaxis = false;
  let newheight;
  
  if(props[0] || props.group == 'pro'){
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
      // text:  props[0]? [props[0].index]: [props.group],
      text:  null, 
      align: 'center',
      margin: 0
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
          borderRadius: 3,
          
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
          text:  props[0]? [props[0].index]: [props.group],   
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
      //  {
      //   name: "Fill",
      //   data: [1],
      //   color: "gray",
      //   grouping: false,
      //   //  groupPadding: -0.5,
         
      // }
      // ,
      {
           name: "gain >= 3%",
        data: [props['gain >= 3%']],
        data: props[0] ? [props[0]['gain >= 3%']]: [props['gain >= 3%']],
        color: "green",
        grouping: false,
        //  groupPadding: -0.5,
      },
      
      {
     name: "gain < 3%",
        // data: [props['gain < 3%']],
         data: props[0] ? [props[0]['gain < 3%']]: [props['gain < 3%']],
        color: "#90EE90",
        grouping: false,
        //  groupPadding: -0.5,
         
      },
         {
        name: "loss < 3%",
     // data: [props['loss < 3%']],
      data: props[0] ? [props[0]['loss < 3%']]: [props['loss < 3%']],
           color: "red",
           grouping: false,
            // groupPadding: -0.5,
         }, {
              name: "loss >= 3%",
          //  data: [props['loss >= 3%']],
            data: props[0] ? [props[0]['loss >= 3%']]: [props['loss >= 3%']],
           color: "#8b0000",
           grouping: false,
            // groupPadding: -0.5,
         },
   
      ]
}


  return (
    <>

    {props[0] ? <HighchartsReact highcharts={Highcharts} options={chartOptions} /> :  <Layout> 
    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
   </Layout>}
   </>
   
  );
}

export default memo(AdvDec4Chart);
