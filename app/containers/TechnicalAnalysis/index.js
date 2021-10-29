/**
 *
 * TechnicalAnalysis
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTechnicalAnalysis from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadTechAnalyData } from './actions';
import TechAnalyChart from '../../components/TechAnalyChart';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const Wrapper = styled.div`
  // display: grid;
  // grid-template-rows: minmax(100px, 1fr) 80vh;  
  // font-size: 1 rem;
  // line-height: 1.6rem;
  // color: #8f8f8f;
`;

const { Option } = Select;

function onChange(value) {
  setCurrent_tkr({value})
}

function onBlur() {
}

function onFocus() {
}

function onSearch(val) {
  
}

export function TechnicalAnalysis(props) {
  useInjectReducer({ key: 'technicalAnalysis', reducer });
  useInjectSaga({ key: 'technicalAnalysis', saga });

  

  const [current_tkr, setCurrent_tkr] = useState('ADBL');

  let dropdown = [];
  useEffect(() => {
    props.loadTechAnalyData();
  }, []);

  props.technicalAnalysis.techAnalyData.map((item)=>dropdown.push(item.tkr));
  dropdown = [...new Set(dropdown)];

  function onChange(value) {
    setCurrent_tkr(value)
  }
  return (
    
    <Wrapper>
      {/* <Helmet>
        <title>TechnicalAnalysis</title>
        <meta name="description" content="Description of TechnicalAnalysis" />
      </Helmet>
      <FormattedMessage {...messages.header} /> */}
      <Navbar />
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a Symbol"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }>
        {/* {props.technicalAnalysis.techAnalyData.map((item)=> <Option value={item.tkr}>{item.tkr}</Option> )} */}
        {dropdown.map((item)=><option value={item}>{item}</option>)}
     </Select>
      {/* <TechAnalyChart {...props.technicalAnalysis.techAnalyData} /> */}
      <TechAnalyChart {...props.technicalAnalysis.techAnalyData.filter( (item) => item.tkr === current_tkr )} />
    </Wrapper>
  );
}

TechnicalAnalysis.propTypes = {
  loadTechAnalyData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  technicalAnalysis: makeSelectTechnicalAnalysis(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTechAnalyData: () => dispatch(loadTechAnalyData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TechnicalAnalysis);
