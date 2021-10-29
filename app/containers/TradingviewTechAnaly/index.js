/**
 *
 * TradingviewTechAnaly
 *
 */


import React, { useEffect, useRef, memo, useState } from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTradingviewTechAnaly from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadTradingViewData } from './actions';
import Selectdropdown from '../../components/Select';
import App from './OChart/index';


export function TradingviewTechAnaly(props) {
  useInjectReducer({ key: 'tradingviewTechAnaly', reducer });
  useInjectSaga({ key: 'tradingviewTechAnaly', saga });
  const [symbolFields, setSymbolFields] = useState([]);
  const [selectedItem1, setselectedItem1] = useState(null);
  // const [item1, setitem1] = useState({});
  //  const [item2, setitem2] = useState({});
   const [item3, setitem3] = useState({});

   

  
  useEffect(() => {
    props.loadTradingViewData();
  }, []);

  useEffect(() => {
    if(props.tradingviewTechAnaly.tradingViewData){
    let allSymbol = props.tradingviewTechAnaly.tradingViewData.map(value => value.symbol);
    allSymbol = [...new Set(allSymbol)];
    setSymbolFields(allSymbol);

    }
    
  }, [props]);


  useEffect(() => {
   if(props.tradingviewTechAnaly.tradingViewData){
         const result1 = props.tradingviewTechAnaly.tradingViewData.filter(value => value.symbol == selectedItem1);
         const xData3 = result1.map(elem =>{return(
      {
        time: elem.date,
        open: Number(elem.open),
        high: Number(elem.high),
        low: Number(elem.low),
        close: Number(elem.close),
      }
    )});
        setitem3({data:xData3,name:selectedItem1});
   }

}, [selectedItem1]);

  return (
    <>
    <label >Select:</label>
     <Selectdropdown items= {symbolFields} setselectedItem={setselectedItem1} selectedItem={selectedItem1} map= {"ACLBSL"} />
      <App data = {item3}/>
    
    </>
  );
}

TradingviewTechAnaly.propTypes = {
  dispatch: PropTypes.func.isRequired,
  
};

const mapStateToProps = createStructuredSelector({
  tradingviewTechAnaly: makeSelectTradingviewTechAnaly(),
  
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadTradingViewData: () => dispatch(loadTradingViewData()),
  };
}



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TradingviewTechAnaly);
