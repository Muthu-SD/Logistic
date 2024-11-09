// DashboardCard.js
import React from 'react';
import { Card } from 'antd';
import { useTheme } from "../context/ThemeContext";

const InfoCard = ({ title, subtitle, children }) => {
  const { theme } = useTheme();

  return (
    <Card style={{ borderRadius: '8px', marginBottom: '20px', background: theme.component.input.backgroundColor }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{title}</h3>
      {subtitle && <p style={{ marginBottom: '1rem' }}>{subtitle}</p>}
      {children}
    </Card>
  );
};

export default InfoCard;
