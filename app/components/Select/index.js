/**
 *
 * Select
 *
 */

import React, { memo } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';



function Selectdropdown(props) {
  


  if(props.items.length > 0){
    if(props.selectedItem == null ){
      props.setselectedItem(props.map);
    }
  }

  function handleChange(e) {
    e.persist();
    props.setselectedItem(e.target.value);
  }
  return (
  <>
  <select onChange={handleChange}>
    <option value="none" selected disabled hidden>
  {props.map}
    </option>
  {props.items  ? props.items.map((field)=><option value={field}>{field}</option>) :null }
</select>
  </>
  );
}

Select.propTypes = {};

export default memo(Selectdropdown);
