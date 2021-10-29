/**
 *
 * ScreenerTable
 *
 */

import React, { memo , useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form, Row, Col, Input, Button, Checkbox,Table, Tag, Space  } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './ScreenerTable.css';

const ScreenerTable = props => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const [productsList, setProductsList] = useState([]);

  // Checkbox Input Fileds Render
  const getFields = () => {
    const count = expand ? props.inputFieldsArray.length : 10;
    const children = [];

    //  onChage For Checkbox
    function onChange(e) {
      // Create Array to CheckBoxed Fields
      const productsListcopy = productsList;
      if (productsList.indexOf(e.target.name) !== -1) {
        const itemIdex = productsListcopy.indexOf(e.target.name);
        productsListcopy.splice(itemIdex, 1);
        console.log(">>>>.productsListcopy",productsListcopy)
        setProductsList([...productsListcopy]);
      } else {
        productsListcopy.push(e.target.name);
        console.log(">>>>.productsListcopy",productsListcopy)
        setProductsList([...productsListcopy]);
      }
      
      console.log(">>>>>>>>>>>checkboxstateupdate",productsList)

      props.checkboxstateupdate([...productsList]);
    }

    // Loop To Display Input Fields
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i} className="screenertableform--row-each">
          <Checkbox name={props.inputFieldsArray[i]} onChange={onChange} className="screenertableform--row-each-checkbox"/>
          <Form.Item
            name={props.inputFieldsArray[i]}
            label={props.inputFieldsArray[i]}
            className="screenertableform--row-each-labels"
          >
            {/* Add Bar  */}
            {/* <Input placeholder="Any" onChange={onInputFieldEntered} id={props.inputFieldsArray[i]} className="screenertableform--row-each-input" /> */}
          </Form.Item>
        </Col>
      );
    }

    //  onInputFieldEntered
    function onInputFieldEntered(e) {
      e.persist();
      props.setInputFieldsId(e.target.id);
      props.setInputFieldsValue(e.target.value);
    }
    return children;
  };

  return (
    <div>
      {props.inputFieldsArray.length > 1 ?  <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form screenertableform"
      >
        <Row className="screenertableform--fields" gutter={2}>{getFields()}</Row>
        <Row className="screenertableform--row">
          <Col
            span={2}
            style={{
              textAlign: 'right',
            }}
            className="screenertableform--row"
          >
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a>
          </Col>
        </Row>
      </Form>  : null }

     

     

      <div className="search-result-list">
      {props.showtable == "on" ?   <Table dataSource={props.dataSource} columns={props.columns} /> : null}
        {/* <Table dataSource={props.dataSource} columns={props.columns} />; */}
      </div>
    </div>
  );
};

ScreenerTable.propTypes = {};

export default memo(ScreenerTable);
