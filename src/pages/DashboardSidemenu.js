// Dashboard.js
import React, { useState } from "react";
import PolarChart from "./PolarChart";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart"; // Import the DonutChart component
import { Card } from "antd";
import DashboardCard from "../components/DashboardCard";
import InfoCard from "../components/InfoCard"; // Import the new InfoCard component

const DashboardSidemenu = () => {
  const [activeChart, setActiveChart] = useState("polar"); // State to manage active chart

  return (
    <div>
      {/* Dashboard Cards */}
      <div className="DashboardCardContainer" style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <DashboardCard
            title="Daily Sales"
            value="$2000.00"
            icon="📈"
            color="green"
            progress={75} // Adjust progress as needed
          />
          <DashboardCard
            title="Raw Material"
            value="$1640.00"
            icon="📦"
            color="red"
            progress={30} // Adjust progress as needed
          />
          <DashboardCard
            title="Storage Balance"
            value="40"
            icon="📦"
            color="yellow"
            progress={60} // Adjust progress as needed
          />
        </div>
      </div>

      {/* Card with Charts and Donut Chart */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        {/* Polar/Line Chart Card */}
        <Card style={{ width: "500px", marginRight: "20px" }}>
          {/* Chart Rendering Based on Active Tab */}
          <div style={{ marginTop: "20px" }}>
            {activeChart === "polar" ? <PolarChart /> : <LineChart />}
          </div>

          <footer
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#000",
              color: "#fff",
              padding: "10px",
            }}
          >
            {/* Tab Buttons */}
            <div
              onClick={() => setActiveChart("polar")}
              style={{
                borderTop: activeChart === "polar" ? "3px solid #Ececec" : "none",
                cursor: "pointer",
                padding: "10px",
                color: activeChart === "polar" ? "#Ececec" : "#fff",
              }}
            >
              Supplier Info
            </div>
            <div
              onClick={() => setActiveChart("line")}
              style={{
                borderTop: activeChart === "line" ? "3px solid #Ececec" : "none",
                cursor: "pointer",
                padding: "10px",
                color: activeChart === "line" ? "#Ececec" : "#fff",
              }}
            >
              Supplier Import Volume
            </div>
          </footer>
        </Card>

        {/* Donut Chart and Info Card */}
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Donut Chart Card */}
          <Card style={{ width: "300px", height: "350px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <DonutChart />
          </Card>

          {/* Info Card */}
          <InfoCard />
        </div>
      </div> ,
    </div>
  );
};

export default DashboardSidemenu;
