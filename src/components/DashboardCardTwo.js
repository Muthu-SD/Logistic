// DashboardCard.js
import React from 'react';
import { Card } from 'antd';

const DashboardCardTwo = ({ title, subtitle, children }) => {
  return (
    <Card style={{ borderRadius: '8px', marginBottom: '20px' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{title}</h3>
      {subtitle && <p style={{ color: 'gray', marginBottom: '1rem' }}>{subtitle}</p>}
      {children}
    </Card>
  );
};

export default DashboardCardTwo;
