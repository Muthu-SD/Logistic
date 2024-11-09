// DonutChart.js
import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  // Configuration for the donut chart
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["DPD (Direct Port Delivery)", "Other"],
    colors: ["#2E93fA", "#66DA26"], // Custom colors for segments
    legend: {
      position: "bottom",
    },
  };

  const series = [70, 30]; // Data for the donut chart

  return (
    <div style={{ textAlign: "center" }}>
      <h5>Shipment Processing Method</h5>
      <Chart options={options} series={series} type="donut" width="100%" height="100%"/>
    </div>
  );
};

export default DonutChart;
