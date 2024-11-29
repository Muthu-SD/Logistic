import React from 'react';
import ApexCharts from 'react-apexcharts';

const ClearanceLeadTime = ({chartTitle }) => {
  const data = {
    categories: [
      '3/6/2023', '3/4/2023', '3/30/2023', '3/23/2023', '3/19/2023', '3/26/2023',
      '4/19/2023', '4/25/2023', '5/5/2023', '5/12/2023', '5/16/2023', '5/18/2023',
      '5/18/2023', '6/7/2023', '7/4/2023', '6/24/2023', '7/4/2023', '6/26/2023',
      '8/1/2023', '7/27/2023', '8/3/2023', '8/8/2023', '7/27/2023', '7/24/2023',
      '7/21/2023', '7/26/2023', '13.08.2023', '17.08.2023', '8/31/2023', '8/31/2023',
      '12.09/2023', '14.09/2023', '20.09/2023', '23.09/2023', '11/6/2023', '11/4/2023',
      '11/30/2023', '12/19/2023', '12/27/2023', '12/26/2023', '1/1/2024', '04.01/2024',
      '10.01/2024', '29.01/2024', '5/22/2004', '5/24/2024', '6/5/2024', '6/15/2024'
    ],
    leadTimes: [
      4, 2, 6, 3, 1, 0, 6, -6, 3, 4, 7, 9, 5, 0, 5, 9, 6, 4, 6, 1, 19, 9, 1, 2, 9, 6, 
      6, 6, 19, 11, 3, 3, 1, 3, 3, 5, 16, 5, 7, 10, 10, 8, 13, 11, 3, 5, 3, 1, 4
    ]
  };

  const chartOptions = {
    chart: {
      type: 'bar',
      height: "300px",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded'
      }
    },
    series: [{
      name: 'Clearance Lead Time',
      data: data.leadTimes
    }],
    xaxis: {
      categories: data.categories
    },
    yaxis: {
      title: {
        text: 'Clearance Lead Time'
      }
    },
    title: {
    //   text: 'Clearance Lead Time Over Date',
      align: 'center'
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} days`
      }
    }
  };

  return (
    <div id="chart" >
        <h3>{chartTitle}</h3>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar"  />
    </div>
  );
};

export default ClearanceLeadTime;
