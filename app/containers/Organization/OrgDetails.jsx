import { Card, Col, Row } from 'antd';
import React from 'react';
import OrgNav from './OrgNav';
import OrgRightNav from './OrgRightNav';

const OrgDetails = () => {
  return (
    <>
      <div className="site-card-wrapper org-details-container">
        <Row gutter={16}>
          <Col span={8}>
            <div>
              <OrgNav />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <OrgRightNav />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrgDetails;
