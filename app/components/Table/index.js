/**
 *
 * Table
 *
 */

import React, { memo } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './css/table.css';

const Wrapper = styled.div`


`;



function Tables({ data, colors }) {
  

  if (data){
    for (let i = 0; i < data.length; i++) {
      data[i].key = i;
    }
  }

  const columns = [
    {
      title: 'Org',
      dataIndex: 'org',
      key: 'org',
      render: text => <a> {text}</a>,
      align : 'center',
    },
    {
      title: 'Close',
      dataIndex: 'close',
      key: 'close',
      align : 'center',
    },
    {
      title: 'Change %',
      dataIndex: 'diff_pct',
      key: 'diff_pct',
      align : 'center',
      render(text) {
        return {
          props: {
            style: { color: colors }
          },
          children: <div>{text}</div>
        };
      }
    },
    {
      title: 'signal',
      key: 'signal',
      dataIndex: 'signal',
      align : 'center',
    },
  ];

  return (
  <Wrapper>
  <Table columns={columns} dataSource={data} classname="signal--table"  pagination={false}
  bordered={true}
  />
  </Wrapper>
  );
}

Tables.propTypes = {
  data: PropTypes.array,
};

export default memo(Tables);
