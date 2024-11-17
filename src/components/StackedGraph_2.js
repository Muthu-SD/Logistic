import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "../context/ThemeContext";

const StackedGraph = ({ colors }) => {
  const { theme } = useTheme();

  // Extracted data from the table (filtered for numeric entries where needed)
  const data = {
    pkgs: [5, 15, 5, 21, 6, 5, 1, 22, 48, 1, 13, 1, 10, 21, 4, 4],
    grwt: [
      247, 147, 790.7, 192, 145, 278, 171.39, 614, 307, 260, 822, 315, 633, 129,
      840, 340,
    ],
    movedOn: [28, 29, 5, 10, 5, 10, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    clearedOn: [4, 7, 11, 11, 11, 12, 12, 13, 13, 18, 18, 18, 18, 18, 18, 18],
    delayedBy: [3, 0, 2, 2, 3, 3, 3, 0, 0, 7, 4, 7, 5, 0, 3, 4],
  };

  const stackedChartData = {
    series: [
      {
        name: "PKGS",
        data: data.pkgs,
      },
      {
        name: "GR. WT.",
        data: data.grwt,
      },
      {
        name: "Moved On",
        data: data.movedOn,
      },
      {
        name: "Cleared On",
        data: data.clearedOn,
      },
      {
        name: "Delayed By",
        data: data.delayedBy,
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "SPRING WRAP",
          "STAILESS STEEL SPRING WIRE",
          "BUSH CENTER & OUTER",
          "LINING",
          "PLATE CLUTCH INNER&OUTER",
          "LINING MACHINING",
          // "RIVETS",
          // "ALUMINIUM BARS",
          // "ALUMINIUM INGOT",
          // "CYLINDRICAL ROLLER",
          // "BUSHING",
          // "LINING",
        ],
        title: {
          text: "Values",
        },
      },
      yaxis: {
        title: {
          text: "Item",
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
      },
      colors: colors || [
        theme.component.stackedChart2.color1,
        theme.component.stackedChart2.color2,
        theme.component.stackedChart2.color3,
        theme.component.stackedChart2.color4,
        theme.component.stackedChart2.color5,
      ],
    },
  };

  return (
    <div>
      <ReactApexChart
        options={stackedChartData.options}
        series={stackedChartData.series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default StackedGraph;
