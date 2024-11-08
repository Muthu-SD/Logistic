import React, { useState } from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { PieChartOutlined, FileDoneOutlined } from "@ant-design/icons";
import { FaShippingFast } from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";
import useStore from "../store/UseStore";
import logo from "../assets/Logo2.png";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <PieChartOutlined />,
  },
  {
    path: "/supplier-clearance",
    label: "Supplier Clearance",
    icon: <FileDoneOutlined />,
  },
  { 
    path: "/shipping-status",
    label: "Shipping Status",
    icon: <FaShippingFast />,
  },
];

const Sidebar = () => {
  const { theme } = useTheme();
  const { logout } = useStore();
  const [selectedKey, setSelectedKey] = useState("/dashboard");

  return (
    <div
      className={styles.sidebar}
      style={{ background: theme.token.colorBgContainer }}
    >
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        {navItems.map((item) => {
          const isActive = selectedKey === item.path;
          const itemStyle = {
            backgroundColor: isActive
              ? theme.component.menuItem.backgroundColor1
              : theme.component.menuItem.backgroundColor2,
            color: isActive
              ? theme.component.menuItem.color1
              : theme.component.menuItem.color2,
          };

          return (
            <li key={item.path} className={styles.navItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                }
                onClick={() => setSelectedKey(item.path)}
                style={itemStyle} // Apply dynamic item style
              >
                {item.icon} <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Button onClick={logout} className={styles.signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default Sidebar;
