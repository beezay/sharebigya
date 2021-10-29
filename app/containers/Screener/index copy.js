/**
 *
 * Screener
 *
 */
import React, { memo, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectScreener ,GetFieldsOnlySelector} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ScreenerTable from '../../components/ScreenerTable';
import { loadScreenData } from './actions';

const Wrapper = styled.div`
  // display: grid;
  // grid-template-rows: minmax(100px, 1fr) 80vh;
  // font-size:1 rem;
  // line-height: 1.6rem;
  // color: #8f8f8f;
`;

export function Screener(props) {
  useInjectReducer({ key: 'screener', reducer });
  useInjectSaga({ key: 'screener', saga });

  const [productsList, setProductsList] = useState([]);
  const [checkboxList, setcheckboxList] = useState([]);
  const [inputFieldsId, setInputFieldsId] = useState();
  const [inputFieldsValue, setInputFieldsValue] = useState('');
  const [inputFieldFilteredProductList, setinputFieldFilteredProductList] = useState([]);
  const [filterFieldObject,setfilterFieldObject] = useState({});


  // Load Screener Data From APi
  useEffect(() => {
    props.loadScreenData();
  }, []);

  // Filter with respect to checkbox selected / unselected
  useEffect(() => {
    if (checkboxList.length > 0) {
      const pick = (obj, args) => ({
        ...args.reduce((res, key) => ({ ...res, [key]: obj[key] }), {}),
      });
      const screenerTableFieldsData = props.screener.screenerData.map(item =>
        pick(item, checkboxList),
      );
      setProductsList(screenerTableFieldsData);
    }
  }, [checkboxList]);

  // Create  a filter object when input 
  useEffect((() => {
    if (inputFieldsId) {
      if (inputFieldsId in filterFieldObject) {
        const newObj = { ...filterFieldObject, [inputFieldsId]: inputFieldsValue };
        setfilterFieldObject(newObj);
      } else {
        const newObj = { ...filterFieldObject, [inputFieldsId]: inputFieldsValue };
        setfilterFieldObject(newObj);
      }
    }
  }), [inputFieldsValue]);


  // Get Table Value After Filter
  useEffect(() => {
    let abc = filterFieldObject;
    if (inputFieldsValue || inputFieldFilteredProductList){
      const filteredInputArray = productsList.filter(function(item) {
        for (var key in abc) {
          if (item[key] === undefined || item[key] < abc[key])   // For Greater than only
            return false;
        }
        return true;
      });

      setinputFieldFilteredProductList(filteredInputArray);
    }
  }, [checkboxList, productsList, filterFieldObject]);     //ProductList => when second item is selected 


  const columns = checkboxList.map(item => ({
    title: item,
    dataIndex: item,
    key: item,
  }));

  const dataSource = inputFieldFilteredProductList.length > 0 ? inputFieldFilteredProductList : productsList;
  return (
    <Wrapper>
      <div className= "wrapper-filed">
      <div>
      
         Descriptive
        </div>
        <ScreenerTable
        inputFieldsArray={props.screenerFields}
        checkboxstateupdate={setcheckboxList}
        setInputFieldsId={setInputFieldsId}
        setInputFieldsValue={setInputFieldsValue}
        fields={checkboxList}
        columns={columns}
        dataSource={dataSource}
      />
      </div>
      <div className= "wrapper-filed">
      <div>
      
         Fundamental
        </div>
        <ScreenerTable
        inputFieldsArray={props.screenerFields}
        checkboxstateupdate={setcheckboxList}
        setInputFieldsId={setInputFieldsId}
        setInputFieldsValue={setInputFieldsValue}
        fields={checkboxList}
        columns={columns}
        dataSource={dataSource}
      />
      </div>
      <div className= "wrapper-filed">
      <div>
      
         Technical
        </div>
        <ScreenerTable
        inputFieldsArray={props.screenerFields}
        checkboxstateupdate={setcheckboxList}
        setInputFieldsId={setInputFieldsId}
        setInputFieldsValue={setInputFieldsValue}
        fields={checkboxList}
        columns={columns}
        dataSource={dataSource}
        showtable={"on"}
      />
      </div>
 
  
     
    </Wrapper>
  );
}

Screener.propTypes = {
  loadScreenData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  screener: makeSelectScreener(),
  screenerFields: GetFieldsOnlySelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadScreenData: () => dispatch(loadScreenData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Screener);
