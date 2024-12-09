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
          { from: -100, to: -1, color: "#FF4560" }, // Red for negative values
          { from: 0, to: 5, color: "#008FFB" }, // Blue for 0-5 days  
          { from: 6, to: 10, color: "#775DD0" }, // purple for 6-10 days
          { from: 11, to: 15, color: "#00E396" }, // Green for >10 days
        ],
      },
    },
  },
  colors: ["#FEB019"], // Default color yellow for bars outside conditions
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
