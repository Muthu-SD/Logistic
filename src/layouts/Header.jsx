import React, { useState } from "react";
import { Menu, Avatar, Dropdown, Input } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  // ThunderboltFilled,
} from "@ant-design/icons"; // Use a suitable icon for theme switching
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";
import ImportModal from "../components/ImportModal"; // Import the modal
import { RxBlendingMode } from "react-icons/rx";

const Header = ({ onImport }) => {
  const { toggleTheme, theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const menu = (
    <Menu>
      <Menu.Item key="account">Account</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="import" onClick={() => setModalVisible(true)}>Import</Menu.Item> 
      
      {/* Import option */}
      
    </Menu>
  );

  return (
    <div className={styles.header}>
      <Input
        className={styles.search}
        style={{
          background: theme.component.input.backgroundColor,
        }}
        placeholder="Search menu..."
        suffix={<SearchOutlined />}
      />
      <div style={{ display: "flex" }}>
        <div className={styles.themeIcon} onClick={toggleTheme}>
          <RxBlendingMode />
        </div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Avatar icon={<UserOutlined />} style={{cursor:"pointer"}}/>
        </Dropdown>
      </div>
      <ImportModal visible={modalVisible} onClose={() => setModalVisible(false)} onDataImport={onImport}/> {/* Modal for import */}
    </div>
  );
};

export default Header;
