import React from "react";
import ReactApexChart from "react-apexcharts";

const SingleBarChart = ({ chartTitle, data }) => {
  // Extract x-axis categories and y-axis data from the provided prop
  const categories = data.map((item) => item.OOC_date);
  const seriesData = data.map((item) => item.clearance_lead_time);

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories,
      title: { text: "OOC Date" },
    },
    yaxis: {
      title: { text: "Clearance Lead Time (Days)" },
    },
  tooltip: {
    y: {
      formatter: (value,{ dataPointIndex }) => {
        const eta = data[dataPointIndex].ETA;  // Get the ETA based on the index
        return `${value} days | ETA: ${eta}`;
      },
    },
  },

  plotOptions: {
    bar: {
      colors: {
        ranges: [
          { from: -100, to: -1, color: "#FF4D4F" }, // Red for negative values
          { from: 0, to: 5, color: "#28A745" }, // Green for 0-5 days
          { from: 6, to: 10, color: "#FFC107" }, // Yellow for 6-10 days
          { from: 11, to: 15, color: "#17A2B8" }, // Blue for >10 days
        ],
      },
    },
  },
  colors: ["#101820"], // Default color black for bars outside conditions
};
  const series = [
    {
      name: "Lead Time",
      data: seriesData,
    },
  ];

  return (
    <div>
        <h3>{chartTitle}</h3>
      <ReactApexChart 
      options={options} 
      series={series} 
      type="bar" 
      height="500px"/>
    </div>
  );
};

export default SingleBarChart;
