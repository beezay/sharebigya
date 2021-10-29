import React, { memo } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const EachChart = styled.div`
  width: 30%;
  @media screen and (max-width: 768px){
        width:100%;

    }
`;

function Charts(props) {
  const data = Object.values({ ...props.props });
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
      Date.parse(data[i].date), // the date
      data[i].open, // open
      data[i].high, // high
      data[i].low, // low
      data[i].close, // close
      data[i].volume, // the volume
    ]);

    volume.push([
      Date.parse(data[i].date), // the date
      data[i].volume, // the volume
    ]);
  }

  const options = {
    plotOptions: {
      candlestick: {
        color: 'red',
        upColor: 'green',
      },
       
    },
    chart: {
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
    
    // rangeSelector: {
    //   selected: 1,
    // },
    rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'month',
                count: 3,
                text: 'Day',
                dataGrouping: {
                    forced: true,
                    units: [['day', [1]]]
                }
            }, {
                type: 'year',
                count: 1,
                text: 'Week',
                dataGrouping: {
                    forced: true,
                    units: [['week', [1]]]
                }
            }, {
                type: 'all',
                text: 'Month',
                dataGrouping: {
                    forced: true,
                    units: [['month', [1]]]
                }
            }],
            buttonTheme: {
                width: 60
            },
            selected: 2
        },
    title: {
      text: data.length > 0 ? data[0].sub_index : 'Loading...',
    },

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
          enabled: true,
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
      },
    ],
    tooltip: {
      split: true,
    },
    series: [
      {
        type: 'candlestick',
        name: data.length > 0 ? data[0].sub_index : 'Loading',
        data: ohlc,
        dataGrouping: {
          units: groupingUnits,
        },
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

Charts.propTypes = {
  props: PropTypes.array,
};

export default memo(Charts);
