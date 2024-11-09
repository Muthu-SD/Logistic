import React from "react";
import { Tabs } from "antd";
import PolarChart from "../../components/PolarChart";
import LineChart from "../../components/LineChart";
import InfoCard from "../../components/InfoCard";

const SupplierAnalyticsCard = () => {
  const { TabPane } = Tabs;

  return (
    <InfoCard title="Supplier Info">
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="Supplier Info" key="1">
          <PolarChart />
        </TabPane>
        <TabPane tab="Supplier Import Volume" key="2">
          <LineChart />
        </TabPane>
      </Tabs>
    </InfoCard>
  );
};
export default SupplierAnalyticsCard;
