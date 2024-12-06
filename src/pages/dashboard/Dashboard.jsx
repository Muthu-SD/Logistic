// Dashboard.jsx
import React from "react";
import { Col, Row } from "antd";
import { useTheme } from "../../context/ThemeContext";
// import styles from "../../styles/Dashboard.module.css";
import { rawTransitData, clearanceLeadTimeData, productData, supplierData, originData, processingMethodData, materialData } from "../../store/DataProvider"
import InfoCard from "../../components/InfoCard";
import DonutChart2 from "../../components/DonutChart2";
import DonutChart from "../../components/chart/DonutChart";
import StackedGraph from "../../components/StackedGraph";
import TrackingTable from "../../components/TrackingTable";
import DonutChartGradient from "../../components/chart/DonutChartGradient";
import ShipmentsHandledChart from "../../components/chart_component/ShipmentsHandledChart";
import ShipperChargesChart from "../../components/chart_component/ShipperChargesChart";
import DashboardSidemenu from "./DashboardSidemenu";
import TransitLeadTime from "../../components/chart_component/TransitLeadTime";
import ClearanceLeadTime from "../../components/chart_component/ClearanceLeadTime"
import SupplierBarChart from "../../components/chart_component/SupplierBarChart";
import MaterialPieChart from "../../components/chart_component/MaterialPieChart";

const Dashboard = () => {
  const { isThemeOne } = useTheme();

  //-------------------------------- Transit lead time functions--> START ---------------------------------------
  // const formattedTransitData = rawTransitData.map((item) => ({
  //   label: item.docRcd, // Using docRcd as label
  //   value: item.leadTime, // Using leadTime as value
  // }));
  //-------------------------------- Transit lead time functions--> END ---------------------------------------

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {/* Three Card at top showing some progress status */}
        <Col span={24}>
          <DashboardSidemenu />
        </Col>

        <Col span={24}>
          <InfoCard>
            <TransitLeadTime chartTitle="Transit Lead Time"  data={rawTransitData} />
          </InfoCard>
        </Col>

        {/* Clearance lead time  */}
        <Col span={24}>
          <InfoCard>
            <ClearanceLeadTime chartTitle="Clearance Lead Time Over Date" data={clearanceLeadTimeData} />
          </InfoCard>
        </Col>

        {/*Supplier Data */}

        <Col span={24}>
        <InfoCard>
        <SupplierBarChart chartTitle="Supplier Data" data={supplierData} />
        </InfoCard>
        </Col>

        {/* <Col span={24}>
          <InfoCard>
            {isThemeOne ? (
              <DonutChartGradient
                chartTitle="Supplier Data"
                chartData={supplierData}
              />
            ) : (
              <DonutChart chartTitle="Supplier Data" chartData={supplierData} />
            )}
          </InfoCard>
        </Col> */}

        {/*Material Data */}
        <Col span={12}>
          <InfoCard>

<MaterialPieChart chartTitle="Material Data" data={materialData}/>

            {/* {isThemeOne ? (
              <DonutChartGradient
                chartTitle="Material Data"
                chartData={productData}
              />
            ) : (
              <DonutChart chartTitle="Material Data" chartData={productData} />
            )} */}
          </InfoCard>
        </Col>

        {/* shipments handled  */}
        <Col span={12}>
          <InfoCard>
            <ShipmentsHandledChart chartTitle="Shipments Handled" />
          </InfoCard>
        </Col>

        {/* Shipment Costs Analysis by Shipper */}
        <Col span={24}>
          <InfoCard>
            <ShipperChargesChart chartTitle="Shipment Costs Analysis by Shipper" />
          </InfoCard>
        </Col>

        {/* Cleared Section */}
        {/* <Col span={12}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <InfoCard title="Cleared">
                <StackedGraph />
              </InfoCard>
            </Col>
            <Col span={24}>
              <InfoCard title="Total">
                <DonutChart2 />
              </InfoCard>
            </Col>
          </Row>
        </Col> */}

        {/* Donut Charts Section */}
        {/* <Col span={12}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <InfoCard>
                {isThemeOne ? (
                  <DonutChartGradient
                    chartTitle="Shipment Processing Method"
                    chartData={processingMethodData}
                  />
                ) : (
                  <DonutChart
                    chartTitle="Shipment Processing Method"
                    chartData={processingMethodData}
                  />
                )}
              </InfoCard>
            </Col>
            <Col span={24}>
              <InfoCard>
                {isThemeOne ? (
                  <DonutChartGradient
                    chartTitle="Origin Data"
                    chartData={originData}
                  />
                ) : (
                  <DonutChart chartTitle="Origin Data" chartData={originData} />
                )}
              </InfoCard>
            </Col>
          </Row>
        </Col> */}

        {/* Tracking Section */}
        {/* <Col span={24}>
          <InfoCard title="Tracking">
            <TrackingTable />
          </InfoCard>
        </Col> */}
        
      </Row>
    </div>
  );
};

export default Dashboard;
