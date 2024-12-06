import React from "react";
import ReactApexChart from "react-apexcharts";

const MaterialPieChart = ({ chartTitle, data }) => {
  // Filter out "Grand Total" and create separate data for display
  const filteredData = data.filter((item) => item.Description !== "Grand Total");
  const grandTotal = data.find((item) => item.Description === "Grand Total")?.["Sum of Gross weight in Tons"] || 0;

  // Extract labels (material names) and values (weights)
  const labels = filteredData.map((item) => item.Description);
  const seriesData = filteredData.map((item) => item["Sum of Gross weight in Tons"]);

  const options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    fill: {
        type: 'gradient',
      },
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(2)} Tons`, // Tooltip for values
      },
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => `${grandTotal.toFixed(2)} Tons`, // Display total inside the donut
            },
          },
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], // Optional color customization
  };

  const series = seriesData;

  return (
    <div>
      <h3>{chartTitle}</h3>
      <ReactApexChart options={options} series={series} type="donut" height="400px" />
    </div>
  );
};

export default MaterialPieChart;
