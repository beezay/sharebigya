import React from 'react'
import Plot from 'react-plotly.js';


const TreeMapPlotly = ({treeMapData,showOn}) => {
  


  // if(treeMapData.diff_pct){
  //   
  //    treeMapData.diff_pct.map((item)=>

  // }
let width1;
let height1;

if(showOn == "dashboard"){
  width1 = 500;
}
else{
  width1= 1000;
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

  let labels1 =[];
  let parents1 = [];
  let values1 = [];
  let colors1 = [];
  let text1= [];

uniqueGroups.map((item)=>{
            labels1.push(item)
            parents1.push("")
            values1.push("0")
            colors1.push("#262931")
            text1.push("")
})
 
  points.map((item)=>{
          labels1.push(item.name)   
          parents1.push(item.parent)
          values1.push(item.value)
          text1.push(item.colorValue + "%")
          
      
  })
  
  
 treeMapData.map((item)=>{

   if(item.diff_pct > 3 || item.diff_pct == 3 ){
    
     colors1.push("#7fff00")
   }
   if(item.diff_pct > 2 && item.diff_pct < 3 || item.diff_pct == 2  ){  
    
    colors1.push("#4cbb17")
   }
   if (item.diff_pct > 1 && item.diff_pct < 2 || item.diff_pct == 1   ){
     colors1.push("#228b22")
   }

   if(item.diff_pct > 0 && item.diff_pct < 1 || item.diff_pct == 0 ){
    
     colors1.push("#35764E")
   }

   if(item.diff_pct > -1 && item.diff_pct < 0  ){
   
      colors1.push("#414554")
   }
  
    if(item.diff_pct > -2 && item.diff_pct < -1  || item.diff_pct == -1 ){
     
     colors1.push("#b7410e")
   }
   if(item.diff_pct > -3 && item.diff_pct < -2  || item.diff_pct == -2 ){
      
      colors1.push("#8b0000")
   }
   if(item.diff_pct < -3 || item.diff_pct == -3){
      
      colors1.push("#FF0000")
   }
  
 })

  let data1 = [{
    type: "treemap",
    
    labels: labels1,
    parents: parents1,
    values: values1,
    // domain: {"x": [0, 0.48]},
        marker: {colors: colors1},
    textinfo: "label+value+text",
    text: text1,
    textposition: 'center',
    
   
}]

var layout = {
  
    
    width: width1,
  height: 700,
  margin:0,
  // paper_bgcolor: 'red',
  // plot_bgcolor: 'red',
 
 
}
var config1 = {responsive: true}
    return (
        <>
      <Plot
      data={data1}
    //   config = {config1}
      layout={layout}
    />
    </>
    )
}

export default TreeMapPlotly
