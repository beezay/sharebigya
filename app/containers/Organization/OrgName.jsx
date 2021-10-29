import { Card } from 'antd';
import React from 'react';

const OrgName = () => {
  return (
    <>
      <div className="site-card-border-less-wrapper ">
        <Card
          title="Card title"
          bordered={false}
          style={{ width: 300 }}
          className="card"
        />
      </div>
    </>
  );
};

export default OrgName;
