/* eslint-disable prettier/prettier */
import React from 'react';
import { Space, Input } from 'antd';

const { Search } = Input;

const Searchbar = () => {
  const onSearch = value => console.log(value);

  return (
    <>
      <Space direction="vertical">
        <Search placeholder="Search Company" onSearch={onSearch} />
      </Space>
    </>
  );
};

export default Searchbar;
