import React from "react";
import Chart from "react-apexcharts";
import { rawTransitData } from "../../store/DataProvider";

const TransitLeadTime = ({ chartTitle }) => {
  
  // Prepare the data for the chart
  const chartData = {
    series: [
      {
        name: "Transit Lead Time",
        data: rawTransitData.map((item) => item.leadTime),
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
            show: false,
          },
      },
      xaxis: {
        categories: rawTransitData.map((item) => item.docRcd), // Dates on the x-axis
        title: {
          text: "Document Receipt Date (DOC. RCD.)",
        },
      },
      yaxis: {
        title: {
          text: "Lead Time (Days)",
        },
      },
      stroke: {
        curve: "smooth",
        // width: 2,
      },
      colors: ["#3B82F6"], // Blue color for the line
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex,}) {
            const docRcd = rawTransitData[dataPointIndex].docRcd;
            const arrivalDt = rawTransitData[dataPointIndex].arrivalDt;
            const leadTime = series[seriesIndex][dataPointIndex];
            return `
              <div style="padding: 10px; border: 1px solid #ddd; background: #fff;">
                <strong>Document Receipt Date:</strong> ${docRcd}<br/>
                <strong>Arrival Date:</strong> ${arrivalDt}<br/>
                <strong>Transit Lead Time:</strong> ${leadTime} days
              </div>`;
        },
      },
    },
  };

  return (
    <div>
        <h3>{chartTitle}</h3>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height="300px"
      />
    </div>
  );
};

export default TransitLeadTime;
