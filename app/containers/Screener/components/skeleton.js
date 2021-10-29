import React from 'react';

import { Col, Skeleton, Space } from 'antd';

const SkeletonLoader = () =>
  [...Array(6).keys()].map(eachIndex => (
    <Col key={eachIndex + 1} span={4}>
      <Space>
        <Skeleton.Avatar active size="default" shape="default" />
        <Skeleton.Input style={{ width: 100 }} active size="default" />
      </Space>
    </Col>
  ));

export default SkeletonLoader;
