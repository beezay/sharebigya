/**
 *
 * Table
 *
 */

 import React, { memo } from 'react';
 import 'antd/dist/antd.css';
 import { Table, Tag, Space } from 'antd'; 
 import { FormattedMessage } from 'react-intl';
 import messages from './messages';
 
 
 function TableCalculator(props) {

  let dataSocurce1 = [props.data];
   const columns = [
     {
       title: 'broker_commission',
       dataIndex: 'broker_commission',
       key: 'broker_commission',
       render: text => <a>{text}</a>,
     },
     {
       title: 'dp_charge',
       dataIndex: 'dp_charge',
       key: 'dp_charge',
     },
     {
       title: 'purchase_price',
       dataIndex: 'purchase_price',
       key: 'purchase_price',
     },
     {
       title: 'qty',
       key: 'qty',
       dataIndex: 'qty',
     },
    {
      title: 'sebon_commission',
      dataIndex: 'sebon_commission',
      key: 'sebon_commission',
    },
    {
      title: 'total_pay_amt',
      key: 'total_pay_amt',
      dataIndex: 'total_pay_amt',
    },
    {
      title: 'total_purchase_amount',
      key: 'total_purchase_amount',
      dataIndex: 'total_purchase_amount',
    },
];
const columnsSell = [
  {
    title: 'broker_commission',
    dataIndex: 'broker_commission',
    key: 'broker_commission',
    render: text => <a>{text}</a>,
  },
  {
    title: 'capital_gain_tax',
    dataIndex: 'capital_gain_tax',
    key: 'capital_gain_tax',
  },
  {
    title: 'capital_gain_tax',
    dataIndex: 'capital_gain_tax',
    key: 'capital_gain_tax',
  },
  {
    title: 'net_receivable_amt',
    key: 'net_receivable_amt',
    dataIndex: 'net_receivable_amt',
  },
  {
   title: 'profit',
   dataIndex: 'profit',
   key: 'profit',
 },
 {
   title: 'qty',
   dataIndex: 'qty',
   key: 'qty',
 },
 {
   title: 'total_pay_amt',
   key: 'total_pay_amt',
   dataIndex: 'total_pay_amt',
 },
 {
   title: 'sebon_commission',
   key: 'sebon_commission',
   dataIndex: 'sebon_commission',
 },
 {
  title: 'total_sell_amount',
  key: 'total_sell_amount',
  dataIndex: 'total_sell_amount',
},
];
  return( 
    <>

    {props.data.profit ?  <Table dataSource={dataSocurce1} columns={columnsSell} pagination={false}/> :<Table dataSource={dataSocurce1} columns={columns} pagination={false}  />}
  
 
  </>
);
}
Table.propTypes = {};
export default memo(TableCalculator);
