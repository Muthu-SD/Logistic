// Dashboard.jsx
import React from "react";
import DashboardSidemenu from "./DashboardSidemenu";
import SupplierAnalyticsCard from "./SupplierAnalyticsCard";
import DashboardCardTwo from "../../components/DashboardCardTwo";
import { Col, Row } from "antd";
const Dashboard = () => {
  return (
    <div>
      <DashboardSidemenu />
      <div style={{ padding: '20px' }}>
      
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {/* Left Section */}
        <Col xs={24} md={6}>
          <DashboardCardTwo title="Supplier Name" subtitle="290">
            {/* Add content here */}
          </DashboardCardTwo>
          <DashboardCardTwo title="Profit Target" subtitle="40%">
            {/* Add content here */}
          </DashboardCardTwo>
        </Col>

        {/* Supplier Info and Import Volume Section */}
        <Col xs={24} md={12}>
          <SupplierAnalyticsCard />
        </Col>

         
      </Row>

      
    </div>
    </div>
  );
};

export default Dashboard;
