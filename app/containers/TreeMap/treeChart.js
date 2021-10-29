


import React, { memo } from 'react';


import Highcharts from "highcharts";
import HighchartsTreemap from "highcharts/modules/treemap";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";


HighchartsTreemap(Highcharts);
HighchartsHeatmap(Highcharts);

function TreeChart({treeMapData,showOn}) {

  let newHeight = 401;
  let newWidth = 301;
  let newTitle;
  if(showOn === "dashboard"){
    newHeight = 401;
    newWidth  = 301;
    newTitle = null;
  }
  else{
    newHeight = 725;
    newWidth = 700;
    newTitle = 'Daily Turnover( size ) and % change (color) for all stocks traded in NEPSE';
  }


  const groupName = treeMapData.map(i => i.group);
  const uniqueGroups = [...new Set(groupName)];
  const pointId = uniqueGroups.map(item =>{
    return{ 
      id: item,
      name: item,
    }
  })

  const points = treeMapData.map(item => {
        return {
          parent: item.group,
          name: item.org,
          value: item.turnover,
          colorValue: item.diff_pct,
        
        };
  });
  const allpoints = pointId.concat(points);
  

  const chartOptions = {
    chart: {
      type: 'treemap',
      height: newHeight,
      width: newWidth,
      plotBorderWidth: 2,
    },
  colorAxis: {
 
  min:-10,
  max: 10,
  // minColor: '#00FF00',
  // maxColor: '#F63538'
  minColor: '#BF4045',
  maxColor: '#A5D4E6',
  
},
    series: [{
    type: "treemap",
      layoutAlgorithm: 'stripes',
      allowDrillToNode: true,
      alternateStartingDirection: true,
      levels: [{
          level: 1,
          borderWidth:2.5,
          borderColor:'#262931',        
          layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
              enabled: true,
              align: 'left',
              verticalAlign: 'top',
              color: 'blue',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
 }
}
}],
      data: allpoints,
      dataLabels: {
        enabled: true,
        color: '#000000',
        fontSize: '14px',
        formatter: function() {         
          var key = this.key,
            point = this.point,
            value = point.value,
            percentage = this.point.colorValue;
  
          return percentage && point.parent ? key + ': ' + percentage  + '%' : key ;
        }
    }
}],
    title: {
      text: newTitle,
    }
  }


  
  return (
    <div onClick={event => { showOn == "dashboard" ? window.location.href='/dashboard/map/tree-map' : null }} >
     
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      
    </div>
  );
}

export default memo(TreeChart);
