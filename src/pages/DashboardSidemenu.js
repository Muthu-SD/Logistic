// Dashboard.js
import React from "react";
import DashboardCard from "../components/DashboardCard";

const DashboardSidemenu = () => {

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
    </div>
  );
};

export default DashboardSidemenu;
