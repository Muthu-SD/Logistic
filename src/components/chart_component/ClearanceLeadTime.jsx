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
      height="350px"/>
    </div>
  );
};

export default SingleBarChart;
