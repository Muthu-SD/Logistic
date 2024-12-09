import React from "react";
import ReactApexChart from "react-apexcharts";

const ShipmentsHandledChart = ({ chartTitle, data }) => {
  // Prepare data for pending and clearance
  const categories = [...new Set(data.map((item) => item.SHIPPER))]; // Unique shippers
  const pendingSeries = categories.map(
    (shipper) => data.find((item) => item.SHIPPER === shipper && item.STATUS === "PENDING")?.["GR. WT."] || 0
  );
  const clearanceSeries = categories.map(
    (shipper) => data.find((item) => item.SHIPPER === shipper && item.STATUS === "CLEARANCE")?.["GR. WT."] || 0
  );

  const abbreviatedCategories = categories.map((shipper) =>
    shipper.length > 15 ? `${shipper.slice(0, 12)}...` : shipper
  );

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth", // Smooth lines
      // width: 2,
    },
    markers: {
      size: 0, // Disable markers
    },
    xaxis: {
      categories: abbreviatedCategories,
      title: { text: "Shippers" },
    },
    yaxis: [
      {
        title: {
          text: "Pending Gross Weight (Tons)",
          style: {
            color: "#FF4D4F", // Match "Pending" color
          },
        },
        labels: {
          style: {
            colors: "#FF4D4F", // Match "Pending" color
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "Clearance Gross Weight (Tons)",
          style: {
            color: "#28A745", // Match "Clearance" color
          },
        },
        labels: {
          style: {
            colors: "#28A745", // Match "Clearance" color
          },
        },
      },
    ],
    tooltip: {
      shared: true, // Combine tooltip for both axes
      intersect: false,
      custom: ({ dataPointIndex }) => {
        const fullShipperName = categories[dataPointIndex];
        const pendingWeight = pendingSeries[dataPointIndex];
        const clearanceWeight = clearanceSeries[dataPointIndex];
        return `
          <div style="padding: 8px; font-size: 12px;">
            <strong>${fullShipperName}</strong><br/>
            Pending: ${pendingWeight.toFixed(2)} Tons<br/>
            Clearance: ${clearanceWeight.toFixed(2)} Tons
          </div>`;
      },
    },
    colors: ["#8740CD", "#628EFF"], // Pending (red), Clearance (green),
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Pending",
      data: pendingSeries,
    },
    {
      name: "Clearance",
      data: clearanceSeries,
    },
  ];

  return (
    <div>
      <h3>{chartTitle}</h3>
      <ReactApexChart options={options} series={series} type="area" height="500px" />
    </div>
  );
};

export default ShipmentsHandledChart;
