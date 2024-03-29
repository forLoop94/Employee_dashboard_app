import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const options = {
  plugins: {
    title: {
      text: "Performance Stats",
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
  },
  borderRadius: 5,
};

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
