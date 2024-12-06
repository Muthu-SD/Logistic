import React from "react";
import Chart from "react-apexcharts";

const TransitLeadTime = ({ data, chartTitle }) => {
  // Prepare the data for the chart
  const chartData = {
    series: [
      {
        name: "Transit Lead Time",
        data: data.map((item) => item.leadTime),
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
        categories: data.map((item) => item.docRcd), // Dates on the x-axis
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
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const docRcd = data[dataPointIndex].docRcd;
            const arrivalDt = data[dataPointIndex].arrivalDt;
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
