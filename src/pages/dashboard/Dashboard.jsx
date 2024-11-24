// Dashboard.jsx
import React from "react";
import InfoCard from "../../components/InfoCard";
import { Col, Row } from "antd";
// import styles from "../../styles/Dashboard.module.css";
import DonutChart2 from "../../components/DonutChart2";
import DonutChart from "../../components/DonutChart";
// import { useTheme } from "../../context/ThemeContext";
import StackedGraph from "../../components/StackedGraph";
import StackedGraph2 from "../../components/StackedGraph_2";
import TrackingTable from "../../components/TrackingTable";
import DonutChartGradient from "../../components/DonutChartGradient";
const Dashboard = () => {
    // const { isThemeOne } = useTheme();

  // Data for Donut (Product Type Breakdown)
  const productData = [
    { label: "L LYSINE MONOHYDROCHOLORIDE 98.5%", value: 1106.09 },
    { label: "L LYSINE MONOHYDROCHOLORIDE 99%", value: 24.3 },
    { label: "L LYSINE SULPHATE", value: 164.99 },
    { label: "L METHONINE", value: 19.38 },
    { label: "L THREONINE", value: 81.52 },
  ];

    // Data for Donut (Supplier Type Breakdown)
    const supplierData = [
    { label: "JIANGXI KELAM", value: 54 },
    { label: "ARSHINE LIFESCIENCE", value: 248 },
    { label: "BEYRON LTD", value: 27 },
    { label: "CJ BIO MALAYSIN", value: 19 },
    { label: "CJ CHEILJEDANG", value: 18 },
    { label: "DAESANG CORPORATION", value: 255 },
    { label: "ECO NUTRITION", value: 27 },
    { label: "ECO NUTRITION", value: 192 },
    { label: "GOLDEN GAIN GROUP HK LTD", value: 473 },
    { label: "SHANDONG GOLDEN", value: 27 },
    { label: "SHANGHAI NUVIT", value: 56 },
    { label: "Grand Total", value: 1396 },
  ];

 // Data for Donut (Origin Type Breakdown)
  const originData = [
    { label: "DALIAN /CHINA", value: 811 },
    { label: "KWANGYANG/KOREA", value: 145 },
    { label: "PORTKELANG/MALAYSIA", value: 19 },
    { label: "QINGDAO/CHINA", value: 45 },
    { label: "SHANGHAI/CHINA", value: 27 },
    { label: "SURABAYA /INDONESIA", value: 18 },
    { label: "TIANJIN/CHINA", value: 193 },
    { label: "XINGANG/CHINA", value: 138 },
    { label: "Grand Total", value: 1396 },
  ];

   // Data for Donut (Shipment Processing Method Type Breakdown)
    const processingMethodData = [
    { label: "ALL CARGO", value: 2 },
    { label: "CONTINENTAL CFS", value:1  },
    { label: "DPD", value: 13 },
    { label: "SANCO CFS", value: 36 },
    { label: "Grand Total", value:52  },
  ];

  // Define the component to render for Product Data based on the theme
  // const ProductDataDonut = isThemeOne === "theme1" ? DonutChartGradient : DonutChart;

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <InfoCard title="Pending">
            <StackedGraph2 />
          </InfoCard>
        </Col>
        {/* Cleared Section */}
        <Col span={12}>
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
        </Col>
        {/* Donut Charts Section */}
        <Col span={12}>
          <Row gutter={[0, 0]}>
          <Col span={24}>
            <InfoCard >
            <DonutChart chartTitle="Shipment Processing Method" chartData={processingMethodData}/>
          </InfoCard>
        </Col>

            <Col span={24}>
            <InfoCard >
            <DonutChart chartTitle="Origin Data" chartData={originData}/>
          </InfoCard>
        </Col>
          </Row>
        </Col>

        <Col span={12}>
          <InfoCard >
            <DonutChart chartTitle="Supplier Data" chartData={supplierData}/>
          </InfoCard>
        </Col>

        <Col span={12}>
          <InfoCard >
             {/* Conditionally render the Product Data donut chart */}
            <DonutChartGradient chartTitle="Product Data" chartData={productData}/>
          </InfoCard>
        </Col>

        {/* Tracking Section */}
        <Col span={24}>
          <InfoCard title="Tracking">
            <TrackingTable />
          </InfoCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

// <div>
//   <DashboardSidemenu />
//   <div style={{ padding: "20px" }}>
//     <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
//       {/* Left Section */}
//       <Col xs={24} md={6}>
//         <>
//           <InfoCard
//             padding="0px"
//             title={
//               <div style={{ padding: "24px 24px 0px 24px" }}>
//                 <Avatar
//                   icon={<FaUserCircle style={{ color: "black" }} />}
//                   style={{ marginRight: "8px" }}
//                 />
//                 Supplier Name
//               </div>
//             }
//             subtitle={
//               <div style={{ padding: "12px 24px 0px 24px" }}>
//                 <span style={{ fontSize: "1rem", fontWeight: "600" }}>
//                   290
//                 </span>
//               </div>
//             }
//           >
//             <div
//               style={{
//                 padding: "15px",
//                 color: "white",
//                 background: theme.component.paddingCard.backgroundColor,
//               }}
//             >
//               <p>209 product available</p>
//             </div>
//           </InfoCard>
//         </>
//         <InfoCard
//           title={
//             <span style={{ fontSize: "10px", color: "grey" }}>
//               Profit Target
//             </span>
//           }
//           subtitle={
//             <span
//               style={{
//                 fontSize: "2rem",
//                 fontWeight: "600",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               40%
//               <Avatar
//                 icon={<GiCrystalGrowth style={{ color: "black" }} />}
//                 size={64}
//               />
//             </span>
//           }
//         >
//           <div className={styles.progressBar}>
//             <div
//               className={styles.progressIndicator}
//               style={{ width: `${60}%`, backgroundColor: "#344966" }}
//             />
//           </div>
//         </InfoCard>
//       </Col>

//       {/* Supplier Info and Import Volume Section */}
//       <Col xs={24} md={12}>
//         <SupplierAnalyticsCard />
//       </Col>
//       <Col xs={24} md={6}>
//         <InfoCard>
//           <DonutChart3 />
//         </InfoCard>
//       </Col>
//     </Row>
//   </div>
// </div>
