import React from 'react';

import { Table, Tag, Space } from 'antd';
import PropTypes from 'prop-types';

const SelectedTable = ({ sectorSelected, screenerFields, sectorList }) => {
  let headerKey = 1;
  const locally = [];
  sectorSelected.map(eachSector =>
    screenerFields.map(
      (x, index) =>
        x.group === eachSector &&
        locally.push({
          key: index + 1,
          symbol: x.symbol,
          name: '-',
          group: x.group,
          eps_final: (
            <span
              style={{
                color: x.eps_final > 0 ? 'green' : x.eps_final > 0 ? 'red' : '',
              }}
            >
              {x.eps_final > 0
                ? `+${x.eps_final}`
                : x.eps_final < 0
                ? `-${x.eps_final}`
                : x.eps_final}
            </span>
          ),
          pe_est: x.pe_est,
          close: x.close,
          rsi: x.rsi,
          year_high: x.year_high,
        }),
    ),
  );
  const actualResponse = [
    ...new Map(locally.map(item => [item.group, item])).values(),
  ];
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: (headerKey += 1),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: (headerKey += 1),
    },
    {
      title: 'Earning per share',
      dataIndex: 'eps_final',
      key: (headerKey += 1),
    },
    {
      title: 'Price to earning ratio',
      dataIndex: 'pe_est',
      key: (headerKey += 1),
    },
    {
      title: 'Last transaction price',
      dataIndex: 'close',
      key: (headerKey += 1),
    },
    {
      title: 'Sector',
      dataIndex: 'group',
      key: (headerKey += 1),
    },
    {
      title: 'Relative strength index',
      dataIndex: 'rsi',
      key: (headerKey += 1),
    },
    {
      title: 'Year High',
      dataIndex: 'year_high',
      key: (headerKey += 1),
    },
  ];
  return <Table dataSource={actualResponse} columns={columns} />;
};

SelectedTable.propTypes = {
  sectorList: PropTypes.array,
  screenerFields: PropTypes.array,
  sectorSelected: PropTypes.array,
};

export default SelectedTable;
