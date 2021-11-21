import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/regester">regester</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
