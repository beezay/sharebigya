import { Card, Col, Row } from 'antd';
import React from 'react';

const OrgPoints = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" className="card">
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" className="card">
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrgPoints;
