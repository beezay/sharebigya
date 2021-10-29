import React from 'react'
import {AdvDecIndicatorData, AdvDec4IndicatorData} from "./indicationData";
import {CheckBox,TextLabel,Wrapper } from './css/indicatorElements';





export const Indicator = ({type}) => {
  let data = AdvDecIndicatorData;
  if(type == 'advdec'){
    data = AdvDecIndicatorData
  }
  else{
    data = AdvDec4IndicatorData
  }
  return (
    <div>
      {data.map((item)=>{return(
          <Wrapper> 
            <CheckBox  color = {item.color}/>
            <TextLabel>{item.text}</TextLabel>
           </Wrapper>)})}
        </div>
    )
}
