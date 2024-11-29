import React from "react";
import ApexCharts from "react-apexcharts";

const ShipmentsHandledChart = ({ chartTitle }) => {
  const chartData = {
    series: [
      {
        name: "Pending",
        data: [13788, 13933, 4612, 391, 74052.5, 74533], // Pending GR. WT.
      },
      {
        name: "Clearance",
        data: [2472, 14715, 790.7, 13092, 1455, 2770], // Clearance GR. WT.
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true, // Enables stacking
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Zapp Precision Metals (Sweden) AB",
          "Zapp Precision Metals (Sweden) AB",
          "KS GLEITLAGER GMBH",
          "MERITOR HEAVY BRAKING SYSTEMS (UK) LIMITED",
          "PRESS METAL BINTULU SDN BHD",
          "PRESS METAL BINTULU SDN BHD",
        ],
        labels: {
          rotate: -45, // Angle
          formatter: (val) =>
            val.length > 10 ? val.slice(0, 10) + "..." : val, // Truncate long text
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
        },
      },
      colors: ["#FF4560", "#00E396"], // Pending (red), Clearance (green)
      legend: {
        position: "bottom",
      },
      // dataLabels: {
      //     enabled: false,
      // },
      tooltip: {
        y: {
          formatter: (val) => `${val} kg`,
        },
        x: {
          formatter: (val, { dataPointIndex }) => {
            // Return the full category name
            return chartData.options.xaxis.categories[dataPointIndex];
          },
        },
      },
    },
  };

  return (
    <div>
      <h3>{chartTitle}</h3>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="300px"
      />
    </div>
  );
};

export default ShipmentsHandledChart;
