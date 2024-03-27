import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const LineChart = ({ chartData }) => {
  return (
    <Line data={chartData} />
  )
}

export default LineChart