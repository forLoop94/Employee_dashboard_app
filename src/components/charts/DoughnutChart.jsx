import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const options = {
  plugins: {
    title: {
      text: "Age Stats",
    },
  },
};

const DoughnutChart = ({ chartData }) => {
  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
