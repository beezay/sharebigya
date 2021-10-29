import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const OrgNav = () => {
  return (
    <>
      <div className="d-flex">
        <Avatar size={64} icon={<UserOutlined />} />

        <Menu>
          <Menu.Item key="1">Basic Information</Menu.Item>
          <Menu.Item key="2">Fundamental Data</Menu.Item>
          <Menu.Item key="3">Technical Graph</Menu.Item>
          <Menu.Item key="4">Divedend History</Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default OrgNav;
