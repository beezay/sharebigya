
import React, { memo } from 'react';


import Highcharts from "highcharts";
// import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { conformsTo } from 'lodash';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import './css/table.css';


// HighchartsHeatmap(Highcharts);

function Chart({data}) {

 const columns = [
    {
      title: 'buyer_broker',
      dataIndex: 'buyer_broker',
      key: 'buyer_broker',
      // render: text => <a> {text}</a>,
      align : 'center',
    },
    {
      title: 'buyer_rank',
      dataIndex: 'buyer_rank',
      key: 'buyer_rank',
      align : 'center',
    },
    {
      title: 'stock_bought',
      dataIndex: 'stock_bought',
      key: 'stock_bought',
      align : 'center',
      render: text => <a> {text}</a>,
    },
    {
      title: 'buy_amount',
      key: 'buy_amount',
      dataIndex: 'buy_amount',
      align : 'center',
       render(text) {
          return {
            props: {
              style: { color: 'green' }
            },
            children: <div>{text}</div>
          };
        }
    },
    {
      title: 'total_buy',
      dataIndex: 'total_buy',
      key: 'total_buy',
      align : 'center',
    },
    {
      title: 'seller_broker',
      dataIndex: 'seller_broker',
      key: 'seller_broker',
      align : 'center',
    },
    {
      title: 'seller_rank',
      key: 'seller_rank',
      dataIndex: 'seller_rank',
      align : 'center',
    },
    {
      title: 'total_buy',
      dataIndex: 'total_buy',
      key: 'total_buy',
      align : 'center',
    },
    {
      title: 'stock_sold',
      dataIndex: 'stock_sold',
      key: 'stock_sold',
      align : 'center',
      render: text => <a> {text}</a>,
    },
    {
      title: 'sell_amount',
      key: 'sell_amount',
      dataIndex: 'sell_amount',
      align : 'center',
       render(text) {
          return {
            props: {
              style: { color: 'red' }
            },
            children: <div>{text}</div>
          };
        }
    },
    {
      title: 'total_sell',
      key: 'total_sell',
      dataIndex: 'total_sell',
      
      
     
    },
  ];


  return (
    <> 
    <Table columns={columns} dataSource={data.topBrokersData}   pagination={false} bordered={true}
      className="TopBroker__Table"
      
      />
    </>
  );
}

export default memo(Chart);


