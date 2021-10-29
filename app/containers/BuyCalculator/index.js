/**
 *
 * BuyCalculator
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBuyCalculator from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loadBuySellCalcData } from './actions';

import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import TableCalculator from '../../components/TableCalculator';
import {BuySellLayout} from './CSS/indexElements'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8
  }
};


export function BuyCalculator(props) {
  useInjectReducer({ key: 'buyCalculator', reducer });
  useInjectSaga({ key: 'buyCalculator', saga });
 
  const [value, setValue] = React.useState(1);

  const onFinishFailed = (errorInfo) => {
    
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onFinish = values => {
    const Jsonvalues = JSON.stringify(values);
    props.loadBuySellCalcData(Jsonvalues);
  };

  return (
    <>
      <BuySellLayout>
      <Form
        {...layout}
        name="buySellCalculator"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Stock Quantity"
          name="qty"
          initialValue="0"
        >
        <Input />
        </Form.Item>
        
        <Form.Item
          label="Buy Rate"
          name="buy_rate"
          initialValue="0"
        >
          <Input />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Buy</Radio>
            <Radio value={2}>Sell</Radio>
          </Radio.Group>
        </Form.Item>

        {value === 2 ?
          <Form.Item
            label="Selling Rate"
            name="sell_rate"
            initialValue="0"
          >
          <Input />
          </Form.Item>
          :
          null
        }
          <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Calcuate Buy
          </Button>
        </Form.Item>
      </Form>
      {props.buyCalculator.buySellCalcResult.buySellCalcData?  <TableCalculator data={props.buyCalculator.buySellCalcResult.buySellCalcData} /> : null}
      </BuySellLayout>
    </>
  );
}

BuyCalculator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  buyCalculator: makeSelectBuyCalculator(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuySellCalcData: value => dispatch(loadBuySellCalcData(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BuyCalculator);
