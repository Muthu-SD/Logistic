import React from "react";
import ReactApexChart from "react-apexcharts";

const ShipmentCostsChart = ({ chartTitle, data }) => {
  // Process data
  const categories = [...new Set(data.map((item) => item.SHIPPER))];
  const storageCosts = categories.map(
    (shipper) => parseFloat(data.find((item) => item.SHIPPER === shipper)?.["STORAGE / DEMURRAGE"].replace("USD ", "") || 0)
  );
  const detentionCharges = categories.map(
    (shipper) => parseFloat(data.find((item) => item.SHIPPER === shipper)?.["detention charges"].replace("USD ", "") || 0)
  );

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories,
      title: {
        text: "Shippers",
      },
    },
    yaxis: {
      title: {
        text: "Costs (USD)",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
    legend: {
      position: "top",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
  };

  const series = [
    {
      name: "Storage / Demurrage",
      data: storageCosts,
    },
    {
      name: "Detention Charges",
      data: detentionCharges,
    },
  ];

  return (
    <div>
      <h3>{chartTitle}</h3>
      <ReactApexChart options={options} series={series} type="bar" height="500px" />
    </div>
  );
};

export default ShipmentCostsChart;
