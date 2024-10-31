import React from "react";
import { Menu, Button } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  CarOutlined,
} from "@ant-design/icons";
import styles from "../styles/Sidebar.module.css";
import useStore from "../store/UseStore";
import logo from "../assets/Logo2.png";
import { useTheme } from "../context/ThemeContext";

const Sidebar = ({ selectedKey, setSelectedKey }) => {
  const { theme } = useTheme();
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const { logout } = useStore();

  return (
    <div
      className={styles.sidebar}
      style={{ background: theme.token.colorBgContainer }}
    >
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        style={{ height: "100%" }}
      >
        <Menu.Item
          key="1"
          icon={<CheckCircleOutlined />}
          style={{
            backgroundColor:
              selectedKey === "1"
                ? theme.component.menuItem.backgroundColor1
                : theme.component.menuItem.backgroundColor2,
                color:
                selectedKey === "1"
                  ? theme.component.menuItem.color1
                  : theme.component.menuItem.color2,
          }}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CarOutlined />}
          style={{
            backgroundColor:
              selectedKey === "2"
                ? theme.component.menuItem.backgroundColor1
                : theme.component.menuItem.backgroundColor2,
                color:
                selectedKey === "2"
                  ? theme.component.menuItem.color1
                  : theme.component.menuItem.color2,
          }}
        >
          Supplier Clearance 
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<UserOutlined />}
          style={{
            backgroundColor:
              selectedKey === "3"
                ? theme.component.menuItem.backgroundColor1
                : theme.component.menuItem.backgroundColor2,
            color:
              selectedKey === "3"
                ? theme.component.menuItem.color1
                : theme.component.menuItem.color2,
          }}
        >
          Shipping Status
        </Menu.Item>
      </Menu>
      <Button onClick={logout} className={styles.signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default Sidebar;
