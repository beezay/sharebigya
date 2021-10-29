import React, { memo } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styled from "styled-components";


const EachChart = styled.div`
  width: 100%;
  align-self: center;
`


function TechAnalyChart(props) {
  const data = Object.values({ ...props });
  const volume = [];
  const ohlc = [];
  const dataLength = data.length;
  
  const groupingUnits = [
    [
      'week', // unit name
      [1], // allowed multiples
    ],
    ['month', [1, 2, 3, 4, 6]],
  ];

  let i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      // Date.parse(data[i]['date']), // the date
      data[i]['date'],
      data[i]['open'], // open
      data[i]['high'], // high
      data[i]['low'], // low
      data[i]['close'], // close
      data[i]['volume'], // the volume
    ]);

    // volume.push([
    //   // Date.parse(data[i]['date']), // the date
    //   data[i]['date'],
    //   data[i]['volume'], // the volume
    // ]);
  }

  const options = {
    

    
  

    rangeSelector: {
      selected: 1,
    },
    // title: {
    //   text: data.length > 0 ? data[0]['sub_index'] : 'Loading',
    // },

    yAxis: [
      {
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: 'OHLC',
        },
        height: '60%',
        linWidth: 2,
        resize: {
          nabled: true,
        },
      },
      {
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: 'Volume',
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2,
      }
    ],
    tooltip: {
      split: true,
    },
    series: [
    
      {
        type: 'candlestick',
        name: data.length > 0 ? data[0]['sub_index'] : "Loading",
        data: ohlc,
        dataGrouping: {
          units: groupingUnits,
        }
      },
      {
        type: 'column',
        name: 'Volume',
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits,
        },
      },
    ],
  };

  return (
    <EachChart>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={options}
      />
    </EachChart>
  );
}

export default memo(TechAnalyChart);
