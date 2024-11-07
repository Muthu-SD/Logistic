import React from "react";
import { Col, Row } from "antd";
import DashboardCard from "../../components/DashboardCard";




const Dashboard = () => {
  const dashboardData = [
    {
      title: "Daily Sales",
      value: "$2000.00",
      icon: "📈",
      color: "green",
      progress: 75,
    },
    {
      title: "Raw Material",
      value: "$1640.00",
      icon: "📦",
      color: "red",
      progress: 30,
    },
    {
      title: "Storage Balance",
      value: "40",
      icon: "📦",
      color: "yellow",
      progress: 60,
    },
  ];

  return (
    <div>
      <Row gutter={16} >
          {dashboardData.map((item, index) => (

        <Col span={8}>
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              color={item.color}
              progress={item.progress}
            />

        </Col>
          ))}

          <Col span={6}>Hi</Col>
          <Col span={12}>Bye</Col>

          
      </Row>
    </div>
  );
};

export default Dashboard;
