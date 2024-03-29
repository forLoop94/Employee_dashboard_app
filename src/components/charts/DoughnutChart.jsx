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
  return (
    <div className="lg:col-span-1 lg:row-span-1 shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
