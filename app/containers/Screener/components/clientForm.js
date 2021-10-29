import React from 'react';

import { Card, Col, Row, Checkbox, Form, Slider, Switch } from 'antd';
import PropTypes from 'prop-types';
import SkeletonLoader from './skeleton';

const UserForm = ({
  sectorList,
  isRequesting,
  sectorSelected,
  handleCheckBox,
}) => (
  <React.Fragment>
    <Card>
      <Card
        type="inner"
        title={<strong>Sector</strong>}
        extra={
          <Checkbox
            onChange={() => handleCheckBox('all')}
            checked={
              (sectorList.length > 0 &&
                sectorSelected.length === sectorList.length) ||
              false
            }
          >
            Select All
          </Checkbox>
        }
      >
        <Row>
          {isRequesting ? (
            <SkeletonLoader />
          ) : (
            sectorList.map((eachSector, index) => (
              <Col key={`${index + 1}`} span={4}>
                <Checkbox
                  checked={sectorSelected.includes(eachSector)}
                  onChange={() => handleCheckBox(eachSector)}
                >
                  {eachSector}
                </Checkbox>
              </Col>
            ))
          )}
        </Row>
      </Card>
    </Card>
    <br />
    <Card>
      <Card type="inner" title={<strong>Fundamental</strong>}>
        <Row>
          {isRequesting ? (
            <SkeletonLoader />
          ) : (
            <React.Fragment>
              <Col span={4}>
                <Checkbox onChange={() => false}>PE</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox onChange={() => false}>EPS</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox onChange={() => false}>GROWTH</Checkbox>
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={<strong>Technical</strong>}
      >
        <Row>
          {isRequesting ? (
            <SkeletonLoader />
          ) : (
            sectorList.slice(0, 3).map((eachSector, index) => (
              <Col key={`${index + 1}`} span={4}>
                <Checkbox onChange={() => false}>{eachSector}</Checkbox>
              </Col>
            ))
          )}
        </Row>
      </Card>
      <Card type="inner" title={<strong>General</strong>}>
        <Row>
          {isRequesting ? (
            <SkeletonLoader />
          ) : (
            sectorList.slice(0, 3).map((eachSector, index) => (
              <Col key={`${index + 1}`} span={4}>
                <Checkbox onChange={() => false}>{eachSector}</Checkbox>
              </Col>
            ))
          )}
        </Row>
      </Card>
      <br />
      {sectorSelected.length > 0 && (
        <Form>
          <Form.Item name="slider" label="Close Price">
            <Slider
              range
              min={100}
              max={55000}
              defaultValue={[10000, 30000]}
              marks={{
                100: '100',
                10000: '10000',
                20000: '20000',
                30000: '30000',
                45000: '45000',
                55000: '55000',
              }}
              disabled={false}
            />
          </Form.Item>
          <Form.Item name="slider" label="PE">
            <Slider
              range
              min={10}
              max={50}
              defaultValue={[20, 35]}
              marks={{
                10: '10',
                20: '20',
                30: '30',
                40: '40',
                50: '50',
              }}
              disabled={false}
            />
          </Form.Item>
        </Form>
      )}
    </Card>
  </React.Fragment>
);

UserForm.propTypes = {
  sectorList: PropTypes.array,
  isRequesting: PropTypes.bool,
  handleCheckBox: PropTypes.func,
  sectorSelected: PropTypes.array,
};

export default UserForm;
