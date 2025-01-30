import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const options = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  plugins: {
    title: {
      text: "Performance Stats"
    }
  }
}

const LineChart = ({ chartData }) => {
  return (
    <Line data={chartData} options={options}/>
  )
}

export default LineChart