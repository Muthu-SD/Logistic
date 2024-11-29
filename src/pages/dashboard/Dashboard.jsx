// Dashboard.jsx
import React from "react";
import InfoCard from "../../components/InfoCard";
import { Col, Row } from "antd";
// import styles from "../../styles/Dashboard.module.css";
import DonutChart2 from "../../components/DonutChart2";
import DonutChart from "../../components/chart/DonutChart";
import { useTheme } from "../../context/ThemeContext";
import StackedGraph from "../../components/StackedGraph";
import TrackingTable from "../../components/TrackingTable";
import DonutChartGradient from "../../components/chart/DonutChartGradient";
import BarChart from "../../components/chart/BarChart";
import ClearanceLeadTime from "../../components/chart_component/ClearanceLeadTime";



const Dashboard = () => {
    const { isThemeOne } = useTheme();

//-------------------------------- Transit lead time --> START ---------------------------------------
const rawTransitData = [
  { docRcd: '23-08-2021', arrivalDt: '08-10-2021', leadTime: 46 },
  { docRcd: '31-08-2021', arrivalDt: '04-10-2021', leadTime: 34 },
  { docRcd: '06-09-2021', arrivalDt: '30-09-2021', leadTime: 24 },
  { docRcd: '06-09-2021', arrivalDt: '06-10-2021', leadTime: 30 },
  { docRcd: '06-09-2021', arrivalDt: '07-10-2021', leadTime: 31 },
  { docRcd: '06-09-2021', arrivalDt: '08-10-2021', leadTime: 32 },
  { docRcd: '15-09-2021', arrivalDt: '08-10-2021', leadTime: 23 },
  { docRcd: '23-09-2021', arrivalDt: '13-10-2021', leadTime: 20 },
  { docRcd: '29-09-2021', arrivalDt: '11-10-2021', leadTime: 12 },
  { docRcd: '04-10-2021', arrivalDt: '01-11-2021', leadTime: 28 },
  { docRcd: '13-10-2021', arrivalDt: '01-11-2021', leadTime: 19 },
  { docRcd: '13-10-2021', arrivalDt: '03-11-2021', leadTime: 21 },
  { docRcd: '13-10-2021', arrivalDt: '10-11-2021', leadTime: 28 },
  { docRcd: '23-10-2021', arrivalDt: '08-11-2021', leadTime: 16 },
  { docRcd: '23-10-2021', arrivalDt: '10-11-2021', leadTime: 18 },
  { docRcd: '23-10-2021', arrivalDt: '11-11-2021', leadTime: 19 },
  { docRcd: '23-10-2021', arrivalDt: '12-11-2021', leadTime: 20 },
  { docRcd: '23-10-2021', arrivalDt: '25-11-2021', leadTime: 33 },
  { docRcd: '25-10-2021', arrivalDt: '16-11-2021', leadTime: 22 },
  { docRcd: '27-10-2021', arrivalDt: '21-11-2021', leadTime: 25 },
  { docRcd: '03-11-2021', arrivalDt: '04-12-2021', leadTime: 31 },
  { docRcd: '12-11-2021', arrivalDt: '23-11-2021', leadTime: 11 },
  { docRcd: '12-11-2021', arrivalDt: '01-12-2021', leadTime: 19 },
  { docRcd: '16-11-2021', arrivalDt: '29-11-2021', leadTime: 13 },
  { docRcd: '16-11-2021', arrivalDt: '01-12-2021', leadTime: 15 },
  { docRcd: '16-11-2021', arrivalDt: '06-12-2021', leadTime: 20 },
  { docRcd: '16-11-2021', arrivalDt: '13-12-2021', leadTime: 27 },
  { docRcd: '16-11-2021', arrivalDt: '24-12-2021', leadTime: 38 },
  { docRcd: '16-11-2021', arrivalDt: '28-12-2021', leadTime: 42 },
  { docRcd: '17-11-2021', arrivalDt: '21-11-2021', leadTime: 4 },
  { docRcd: '22-11-2021', arrivalDt: '04-12-2021', leadTime: 12 },
  { docRcd: '22-11-2021', arrivalDt: '29-12-2021', leadTime: 37 },
  { docRcd: '24-11-2021', arrivalDt: '13-12-2021', leadTime: 19 },
  { docRcd: '29-11-2021', arrivalDt: '14-12-2021', leadTime: 15 },
  { docRcd: '29-11-2021', arrivalDt: '28-12-2021', leadTime: 29 },
  { docRcd: '01-12-2021', arrivalDt: '21-12-2021', leadTime: 20 },
  { docRcd: '07-12-2021', arrivalDt: '05-01-2022', leadTime: 29 },
  { docRcd: '07-12-2021', arrivalDt: '06-01-2022', leadTime: 30 },
  { docRcd: '08-12-2021', arrivalDt: '12-12-2021', leadTime: 4 },
  { docRcd: '15-12-2021', arrivalDt: '04-01-2022', leadTime: 20 },
  { docRcd: '22-12-2021', arrivalDt: '05-01-2022', leadTime: 14 },
  { docRcd: '22-12-2021', arrivalDt: '07-01-2022', leadTime: 16 },
  { docRcd: '22-12-2021', arrivalDt: '13-01-2022', leadTime: 22 },
  { docRcd: '28-12-2021', arrivalDt: '04-01-2022', leadTime: 7 },
  { docRcd: '28-12-2021', arrivalDt: '06-01-2022', leadTime: 9 }
];


//-------------------------------- Transit lead time --> END ---------------------------------------




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
    { label: "JIANGXI KELAM", value: 27.2 },
    { label: "ARSHINE", value: 109.9 },
    { label: "ARSHINE LIFESCIENCE", value: 55.6 },
    { label: "ARSHINE LIFESCIENE", value: 54.6 },
    { label: "BEYRON LTD", value: 27.2 },
    { label: "CJ BIO MALAYSIN", value: 19.4 },
    { label: "CJ CHEILJEDANG", value: 17.7 },
    { label: "DAESANG CORPORATION", value: 254.6 },
    { label: "ECO NUTRITION", value: 82.186 },
    { label: "EOC NUTRITION2", value: 55.6 },
    { label: "GOLDEN GAIN", value: 111.2 },
    { label: "GOLDEN GAIN GROUP HK LTD", value: 27.216 },
    { label: "JIANGXI KELEM", value: 361.8 },
    { label: "SHANDONG GOLDEN", value: 27 },
    { label: "SHANGHAI NUVIT", value: 56 },
    { label: "Grand Total", value: 1368.5 },
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


  const formattedTransitData = rawTransitData.map(item => ({
    label: item.docRcd,  // Using docRcd as label
    value: item.leadTime // Using leadTime as value
}));

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {/* <Col span={24}>
          <InfoCard title="Pending">
            <StackedGraph2 />
          </InfoCard>
        </Col> */}
        <Col span={24}>
          <InfoCard >
          <BarChart chartTitle="Transit Lead Time" chartData={formattedTransitData} />
          </InfoCard>
        </Col> 

        {/* Clearance lead time  */}
        <Col span={12}>
          <InfoCard >
          <ClearanceLeadTime chartTitle="Clearance Lead Time Over Date"/>
          </InfoCard>
        </Col>

        {/*Supplier Data */}
        <Col span={12}>
          <InfoCard >
          {isThemeOne ? 
          <DonutChartGradient chartTitle="Supplier Data" chartData={supplierData}/>
          :
            <DonutChart chartTitle="Supplier Data" chartData={supplierData}/>
          }
          </InfoCard>
        </Col>

         {/*Material Data */}
        <Col span={24}>
          <InfoCard >
             {isThemeOne ? 
             <DonutChartGradient chartTitle="Material Data" chartData={productData}/>
             :
             <DonutChart chartTitle="Material Data" chartData={productData}/>
             }
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
            {isThemeOne ? 
            <DonutChartGradient chartTitle="Shipment Processing Method" chartData={processingMethodData}/>
            :
            <DonutChart chartTitle="Shipment Processing Method" chartData={processingMethodData}/>
              }
          </InfoCard>
        </Col>

            <Col span={24}>
            <InfoCard >
            {isThemeOne ? 
            <DonutChartGradient chartTitle="Origin Data" chartData={originData}/>
            :
            <DonutChart chartTitle="Origin Data" chartData={originData}/>
            }
          </InfoCard>
        </Col>
          </Row>
        </Col>

        {/* <Col span={12}>
          <InfoCard >
          {isThemeOne ? 
          <DonutChartGradient chartTitle="Supplier Data" chartData={supplierData}/>
          :
            <DonutChart chartTitle="Supplier Data" chartData={supplierData}/>
          }
          </InfoCard>
        </Col> */}

        

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
