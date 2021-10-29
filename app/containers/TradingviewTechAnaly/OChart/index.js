import React, { useEffect, useRef, memo, useState } from "react";
import { createChart, CrosshairMode } from 'lightweight-charts';

const App = (props) => {
    const chartRef = React.useRef(null);
    const chart = useRef();
    const candleSeries = useRef(null);
    const resizeObserver = useRef();
    

    useEffect(()=> {
    if(chartRef.current){
     chart.current = createChart(chartRef.current, {
        // width: 900,
        height: 500,
        // layout: {
        //   backgroundColor: '#253248',
        //   textColor: 'rgba(255, 255, 255, 0.9)',
        // },
        // grid: {
        //   vertLines: {
        //     color: '#334158',
        //   },
        //   horzLines: {
        //     color: '#334158',
        //   },
        // },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: '#485c7b',
        },
        timeScale: {
          borderColor: '#485c7b',
        },
          
      });
      

      prepareChart();
    }
  }, [])

  React.useEffect(()=> {

    if(props.data.data && props.data.data.length > 0){
    let zz =  props.data.data.sort(function(a,b){
            return new Date(a.time) - new Date(b.time);
        });      
        candleSeries.current.setData(zz);
    }
  }, [props.data.data])

 // Resize chart on container resizes.
 useEffect(() => {
  resizeObserver.current = new ResizeObserver(entries => {
    const { width, height } = entries[0].contentRect;
    chart.current.Options({ width, height });
    setTimeout(() => {
      chart.current.timeScale().fitContent();
    }, 0);
  });

  resizeObserver.current.observe(chartRef.current);

  return () => resizeObserver.current.disconnect();
}, []);

  function prepareChart() {


     candleSeries.current = chart.current.addCandlestickSeries({
  });

 let a =[
    { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
    { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 }
 ]


    if(props.data.data && props.data.data.length > 0){
    let zz =  props.data.data.sort(function(a,b){
            return new Date(a.time) - new Date(b.time);
        });      
        candleSeries.current.setData(zz);
    }
    else{
        candleSeries.current.setData(a);
    }


}

    return (
      
             <div ref={chartRef} />
             
    
    )
}

export default App
