/**
 *
 * CorrelationMatrix
 *
 */

 import React, { memo, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCorrelationMatrix from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadCorrelationMatrixData } from './actions';
import Correlation_HeatMap from '../../components/PlotyJS/Correlation_HeatMap'

export function CorrelationMatrix(props) {
  useInjectReducer({ key: 'correlationMatrix', reducer });
  useInjectSaga({ key: 'correlationMatrix', saga });
  // console.log(">>>props", props.correlationMatrix.correlationMatrixData)

  const [xAxis, setXAxis] = useState([])
  const [yAxis, setYAxis] = useState([])
  const [zAxis, setZAxis] = useState([])

  useEffect(()=>{
    props.loadCorrelationMatrixData();
  },[])

  useEffect(()=>{
    


    if( props.correlationMatrix.correlationMatrixData[0] ){
     
      // console.log(">>Inside IF Else",props.correlationMatrix.correlationMatrixData )
      let allOrg = Object.keys( props.correlationMatrix.correlationMatrixData[0]);
      setXAxis(allOrg)
      // console.log("allOrg reverse",allOrg, allOrg.reverse() )
      let yaxisData = allOrg.reverse()
      const reversedList = [...allOrg].reverse()

      setYAxis( reversedList)

    //  let totalData = props.correlationMatrix.correlationMatrixData.length
    //   let eachArray = [];
      let totalArray = [];
      
      // props.correlationMatrix.correlationMatrixData.map((item)=> console.log(">Item",Object.values(item)))

      props.correlationMatrix.correlationMatrixData.map((item)=> totalArray.push(Object.values(item)))
      
      // console.log(">>Total array",totalArray )
      

      setZAxis(totalArray)

      // props.correlationMatrix.correlationMatrixData.map((item)=> console.log(">Item",item))

      // props.correlationMatrix.correlationMatrixData.map((item)=> (item.map(each) => console.log(each)) )

      
    }
      
    
  },[props])

  // console.log(">>>Xaixs and y aixs",xAxis,yAxis)

  return (
    <>
      <Correlation_HeatMap x={yAxis} y={xAxis} z={zAxis} />


    </>
  );
}

CorrelationMatrix.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  correlationMatrix: makeSelectCorrelationMatrix(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCorrelationMatrixData:()  => dispatch(loadCorrelationMatrixData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CorrelationMatrix);
