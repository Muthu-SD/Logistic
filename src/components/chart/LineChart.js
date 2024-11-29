import React from 'react';
import ApexCharts from 'react-apexcharts';

const LineChart = ({ chartData, chartTitle }) => {
    const chartOptions = {
        chart: {
            type: 'line',
        },
        xaxis: {
            categories: chartData.map(item => item.label),
        },
        stroke: {
            curve: 'smooth',
        },
        colors: ['#FF4560', '#775DD0', '#00E396'],
    };

    const chartSeries = [{
        name: 'Value',
        data: chartData.map(item => item.value),
    }];

    return (
        <div className="line-chart">
            <h3>{chartTitle}</h3>
            <ApexCharts
                options={chartOptions}
                series={chartSeries}
                type="line"
                height="300px"
            />
        </div>
    );
};

export default LineChart;
