// Dashboard.jsx
import React from "react";
import InfoCard from "../../components/InfoCard";
import { Col, Row } from "antd";
// import styles from "../../styles/Dashboard.module.css";
import DonutChart2 from "../../components/DonutChart2";
// import { useTheme } from "../../context/ThemeContext";
import StackedGraph from "../../components/StackedGraph";
import StackedGraph2 from "../../components/StackedGraph_2";
import TrackingTable from "../../components/TrackingTable";
const Dashboard = () => {
  //   const { theme } = useTheme();

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <InfoCard title="Pending">
            <StackedGraph2 />
          </InfoCard>
        </Col>
        <Col span={18}>
          <InfoCard title="Cleared">
            <StackedGraph />
          </InfoCard>
        </Col>
        <Col span={6}>
          <InfoCard title="Total">
            <DonutChart2 />
          </InfoCard>
        </Col>

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
//           <DonutChart />
//         </InfoCard>
//       </Col>
//     </Row>
//   </div>
// </div>
