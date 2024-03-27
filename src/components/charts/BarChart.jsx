import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  )
}

export default BarChart