import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const OrgRightNav = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>Market Capitalization</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>52 Weeks High/Low</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>EPS reported</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>Paid Up Capital</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>EPS ttm</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>PE ratio</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>PB ratio</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>ROE ttm</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <h4>Book Value</h4>
            <Text type="secondary">XXXXXXXXX</Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrgRightNav;
