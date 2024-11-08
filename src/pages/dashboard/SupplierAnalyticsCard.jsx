import React from "react";
import { Tabs } from "antd";
import PolarChart from "../../components/PolarChart";
import LineChart from "../../components/LineChart";
import DashboardCardTwo from "../../components/DashboardCardTwo";

const SupplierAnalyticsCard = () => {
  const { TabPane } = Tabs;

  return (
    <DashboardCardTwo title="Supplier Info">
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="Supplier Info" key="1">
          <PolarChart />
        </TabPane>
        <TabPane tab="Supplier Import Volume" key="2">
          <LineChart />
        </TabPane>
      </Tabs>
    </DashboardCardTwo>
  );
};
export default SupplierAnalyticsCard;
